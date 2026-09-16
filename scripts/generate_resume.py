#!/usr/bin/env python3
"""Generate a polished, non-identifying placeholder resume PDF (public/resume.pdf)."""
import os

WIDTH, HEIGHT = 612, 792  # US Letter


def esc(s: str) -> str:
    s = (
        s.replace("\u2014", "-")
        .replace("\u2013", "-")
        .replace("\u2022", "-")
        .replace("\u00b7", "-")
    )
    return s.replace("\\", r"\\").replace("(", r"\(").replace(")", r"\)")


lines = []  # (x, y, size, font, text)  font: "R"=Helvetica, "B"=Helvetica-Bold


def add(x, y, size, font, text):
    lines.append((x, y, size, font, text))


ML = 56
y = 726

add(ML, y, 22, "B", "SOFTWARE ENGINEER")
y -= 20
add(ML, y, 10.5, "R", "CS Student   |   AI/ML  ·  Backend Systems  ·  Full-Stack Development")
y -= 15
add(ML, y, 9, "R", "Placeholder resume — personal details intentionally omitted.")
y -= 26


def heading(title):
    global y
    add(ML, y, 11.5, "B", title.upper())
    y -= 15


def body(text, gap=13.5):
    global y
    add(ML, y, 9.5, "R", text)
    y -= gap


def bullet(text, gap=13.5):
    global y
    add(ML, y, 9.5, "R", "•  " + text)
    y -= gap


heading("Summary")
bullet("Software engineer focused on scalable systems, intelligent applications, and polished UX.")
bullet("Experience across ML infrastructure, distributed backends, and full-stack products.")
y -= 8

heading("Experience")
add(ML, y, 10, "B", "Software Engineer  —  AI Infrastructure Startup")
add(WIDTH - ML - 96, y, 9, "R", "2025 — Present")
y -= 14
bullet("Built an LLM inference gateway with adaptive routing; cut token spend by 40%.")
bullet("Shipped streaming guardrails and a semantic cache serving 1.2k requests/second.")
y -= 6
add(ML, y, 10, "B", "Backend Engineer  —  Cloud Platform Team")
add(WIDTH - ML - 96, y, 9, "R", "2024 — 2025")
y -= 14
bullet("Raft-backed job orchestrator delivering exactly-once execution at 2M+ jobs/day.")
bullet("Reduced tail latency 35% by redesigning the queue sharding strategy.")
y -= 6
add(ML, y, 10, "B", "Machine Learning Engineer  —  Computer Vision Lab")
add(WIDTH - ML - 96, y, 9, "R", "2023 — 2024")
y -= 14
bullet("Fused detection, tracking, and segmentation into a sub-30ms streaming pipeline.")
y -= 8

heading("Selected Projects")
bullet("Aperture — real-time computer-vision pipeline (PyTorch, ONNX Runtime, gRPC, CUDA).")
bullet("Helix — fault-tolerant distributed task orchestrator (Go, Kubernetes, PostgreSQL).")
bullet("Atlas — semantic search over 4M+ documents at 92ms p50 (FastAPI, LLMs, ClickHouse).")
y -= 8

heading("Skills")
body("Languages:  Python, Go, TypeScript, Java, JavaScript")
body("Backend:  FastAPI, Flask, gRPC, REST APIs, Microservices")
body("AI/ML:  PyTorch, OpenCV, Computer Vision, LLMs, Vector Databases")
body("Infrastructure:  Docker, Kubernetes, CI/CD, Cloud, Git")
body("Frontend:  React, Next.js      Database:  PostgreSQL, ClickHouse, Supabase")
y -= 8

heading("Education")
add(ML, y, 10, "B", "B.S. Computer Science  —  University")
add(WIDTH - ML - 96, y, 9, "R", "2021 — 2025")
y -= 20

add(ML, y, 8.5, "R", "References and contact available on request.")

# Build content stream
parts = []
# header rule
parts.append("0.49 0.55 1 RG 1 w")
parts.append(f"{ML} 719 m {WIDTH - ML} 719 l S")
for (x, yy, size, font, text) in lines:
    fref = "F2" if font == "B" else "F1"
    parts.append("BT")
    parts.append("0.93 0.93 0.95 rg")
    parts.append(f"/{fref} {size} Tf")
    parts.append(f"1 0 0 1 {x:.2f} {yy:.2f} Tm")
    parts.append(f"({esc(text)}) Tj")
    parts.append("ET")
content = "\n".join(parts).encode("latin-1")

objects = []
objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
objects.append(
    (
        f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {WIDTH} {HEIGHT}] "
        f"/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>"
    ).encode("latin-1")
)
objects.append(
    b"<< /Length " + str(len(content)).encode() + b" >>\nstream\n" + content + b"\nendstream"
)
objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

pdf = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
offsets = []
for i, obj in enumerate(objects, start=1):
    offsets.append(len(pdf))
    pdf += f"{i} 0 obj\n".encode() + obj + b"\nendobj\n"

xref_pos = len(pdf)
n = len(objects) + 1
pdf += f"xref\n0 {n}\n".encode()
pdf += b"0000000000 65535 f \n"
for off in offsets:
    pdf += f"{off:010d} 00000 n \n".encode()
pdf += (
    b"trailer\n<< /Size " + str(n).encode() + b" /Root 1 0 R >>\nstartxref\n"
    + str(xref_pos).encode()
    + b"\n%%EOF\n"
)

out = os.path.join(os.path.dirname(__file__), "..", "public", "resume.pdf")
out = os.path.abspath(out)
with open(out, "wb") as f:
    f.write(pdf)
print("wrote", out, len(pdf), "bytes")
