from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel
import asyncio
from chat import ask_llm


app = FastAPI()



# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class ChatRequest(BaseModel):
    message: str

# POST /chat — non-streaming
@app.post("/chat")
async def chat(req: ChatRequest):
    try:
        response = ask_llm(req.message)
        return {"answer": response}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

# main.py
@app.get("/chat/stream")
async def stream_chat(request: Request, message: str):
    async def event_generator():
        try:
            async for chunk in ask_llm(message):  # Stream response chunk by chunk
                yield f"data: {chunk}\n\n"
        except Exception as e:
            yield f"data: [ERROR] {str(e)}\n\n"

    return StreamingResponse(event_generator(), media_type="text/event-stream")

