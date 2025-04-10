from langchain_ollama.llms import OllamaLLM
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langchain.callbacks.base import AsyncCallbackHandler
from typing import AsyncGenerator

instructions = """
You are a helpful assistant for someone who is learning urdu in the roman script. Answer questions concisely and with clarity.
If you don't know the answer, say you don't know. Do not be conversational, unless asked to be. Use common dialect."""

# Initialize memory and add instructions as context
memory = ConversationBufferMemory()

# Initialize Ollama. make sure its running
llm = OllamaLLM(model="llama3", stream=True)

# Setup memory and conversation chain
conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True
)

def ask_llm(message: str) -> str:
    prompt = instructions + "\n" + message
    return conversation.run(prompt)
