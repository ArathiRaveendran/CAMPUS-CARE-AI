from ai_module import process_complaint


existing_complaints = [
    "The hostel WiFi is not working.",
    "There is no water supply in the hostel.",
    "The library computers are not working.",
    "The food quality in the college canteen is poor."
]


new_complaint = "The hostel has no water supply."


result = process_complaint(
    new_complaint,
    existing_complaints
)


print("\n===== AI COMPLAINT ANALYSIS =====")

print("Category:", result["category"])
print("Priority:", result["priority"])
print("Summary:", result["summary"])

print("\n===== DUPLICATE DETECTION =====")

print("Similar Complaint:", result["similar_complaint"])
print("Similarity:", result["similarity"])
print("Duplicate:", result["duplicate"])
print("Reason:", result["duplicate_reason"])