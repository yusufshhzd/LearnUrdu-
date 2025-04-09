from langchain.llms import Ollama
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory

# Initialize Ollama. make sure its running
llm = Ollama(model="llama3")

# Setup memory and conversation chain
memory = ConversationBufferMemory()
conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True
)

def ask_llm(message: str) -> str:
    return conversation.run(message)
