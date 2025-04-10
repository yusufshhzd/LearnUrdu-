from langchain_ollama.llms import OllamaLLM
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langchain.callbacks.base import AsyncCallbackHandler
from typing import AsyncGenerator

# Initialize Ollama. make sure its running
llm = OllamaLLM(model="llama3", stream=True)

# Setup memory and conversation chain
memory = ConversationBufferMemory()
conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True
)

def ask_llm(message: str) -> str:
    return conversation.run(message)
