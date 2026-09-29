from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from ai_module import process_complaint


app = FastAPI(title="CAMPUS-CARE AI Service")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ComplaintRequest(BaseModel):
    complaint: str
    existing_complaints: list[str] = []


@app.get("/")
def home():
    return {
        "message": "CAMPUS-CARE AI Service is running"
    }


@app.post("/analyze")
def analyze(request: ComplaintRequest):
    result = process_complaint(
        request.complaint,
        request.existing_complaints
    )

    return result
