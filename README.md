# Scalable NVIDIA Omniverse Streaming on External Networks

This repository showcases an advanced, scalable streaming solution built on NVIDIA's Omniverse Kit-App-Template. It enables secure WebSocket (WSS) communication on port 49100, ensuring that web clients served over HTTPS can connect without mixed-content issues. Additionally, it integrates a WebRTC-based streaming option for low-latency, high-performance real-time media delivery.

## Overview

- **Secure Communication:** Configure secure WSS (wss://) on port 49100 to support HTTPS clients, ensuring encrypted data transfer.
- **Scalability:** Run multiple NVIDIA Omniverse Kit app instances on a single VM to maximize resource efficiency and handle increased streaming loads.
- **External Network Streaming:** Proven capability to stream across networks—from regional VMs (e.g., Virginia to Mumbai) and beyond.
- **WebRTC Streaming:** Leverage a WebRTC-based solution for low-latency, high-performance streaming, further enhancing real-time media delivery.

## Achievements

I have successfully implemented secure streaming over external networks using NVIDIA's Omniverse Kit-App-Template and demonstrated the ability to run multiple app instances on a single VM. This solution not only achieves robust scalability but also integrates a WebRTC-based streaming option to enhance real-time performance.

## Getting Started

1. **Prerequisites:**  
   - NVIDIA Omniverse Kit-App-Template (version 106.5.0+ or later)  
   - Valid SSL certificates (self-signed or CA-trusted) or an SSL-terminating reverse proxy (e.g., Nginx)  
   - A WebRTC-compatible client environment

2. **Setup Instructions:**  
   - Clone the repository  
   - Follow the configuration guidelines to enable HTTPS/WSS on port 49100  
   - Configure your environment for running multiple NVIDIA Omniverse Kit app instances on one VM  
   - Enable and configure the WebRTC-based streaming solution according to the provided documentation

3. **Usage:**  
   - Start the application and verify that clients can securely connect via wss:// while utilizing the WebRTC streaming option  
   - Monitor performance to ensure efficient handling of multiple instances and low-latency real-time communication

## Demo Video

Multiple Kit App instances running on a single VM and WebRTC 2K Streaming happening.

https://github.com/user-attachments/assets/702522a9-5ff1-4d7b-829c-c473bf7c69ea

## Future Enhancements

Additional improvements and optimizations will be documented as the project evolves. Contributions, further guidance, and sample configurations are welcome as we continue to enhance this NVIDIA-based streaming solution.
