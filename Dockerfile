# slim python
FROM python:3.10-slim

# app as workdir
WORKDIR /app

# copy files
COPY ./docs .

# run in python: python -m http.server 8000
CMD ["python", "-m", "http.server", "8000"]

