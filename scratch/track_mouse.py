import cv2, os, math
import numpy as np

video_path = r'D:\project\portfolio\Recording 2026-09-22 212518.mp4'
cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

# Mascot is located at bottom right: x=1750, y=930
mx, my = 1750, 930

# Frame subtraction to locate moving mouse cursor
ret, prev_frame = cap.read()
prev_gray = cv2.cvtColor(prev_frame, cv2.COLOR_BGR2GRAY)

frame_idx = 1
sec_target = 0.5

frames_data = []

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    sec = frame_idx / fps
    
    # Difference to spot cursor movement
    diff = cv2.absdiff(gray, prev_gray)
    prev_gray = gray.copy()
    
    # Find bright moving pixels
    _, thresh = cv2.threshold(diff, 30, 255, cv2.THRESH_BINARY)
    # Bright in current frame
    bright = gray > 200
    cursor_cand = thresh & bright
    
    ys, xs = np.where(cursor_cand)
    if len(xs) > 0:
        cx, cy = int(np.median(xs)), int(np.median(ys))
        frames_data.append((sec, cx, cy))
        
    frame_idx += 1

cap.release()

# Print mouse positions sampled every 1 sec
print("Sampled Mouse Movement & Angles:")
for i in range(0, int(frame_idx / fps)):
    matches = [f for f in frames_data if abs(f[0] - i) < 0.2]
    if matches:
        sec, cx, cy = matches[0]
        dx = cx - mx
        dy = cy - my
        elev = math.degrees(math.atan2(abs(dy), abs(dx))) if dx != 0 else 90
        print(f"Sec {i:2d}s: Mouse=({cx:4d}, {cy:4d}), dx={dx:5d}, dy={dy:5d}, ElevAngle={elev:5.1f} deg")
