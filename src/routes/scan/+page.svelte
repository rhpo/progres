<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { fly } from "svelte/transition";

    function goBack() {
        window.history.back();
    }

    onMount(() => {
        // Mock a successful scan after 3 seconds
        const timer = setTimeout(() => {
            goto("/");
        }, 3500);
        return () => clearTimeout(timer);
    });
</script>

<div class="scan-page" in:fly={{ y: 20, duration: 400 }}>
    <header class="scan-header">
        <button class="back-btn" onclick={goBack} aria-label="Go back">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"><path d="M19 12H5m7 7l-7-7 7-7" /></svg
            >
        </button>
        <h1>Scan Card</h1>
        <div style="width: 24px"></div>
    </header>

    <div class="scanner-container">
        <div class="scanner-overlay">
            <div class="scan-frame">
                <div class="corner top-left"></div>
                <div class="corner top-right"></div>
                <div class="corner bottom-left"></div>
                <div class="corner bottom-right"></div>
                <div class="scan-line"></div>
            </div>
        </div>
        <div class="camera-placeholder">
            <div class="pulse-circle"></div>
        </div>
    </div>

    <div class="scan-instructions">
        <p>
            Place the barcode of your student card<br />within the frame to scan
        </p>
    </div>

    <footer class="scan-footer">
        <div class="barcode-hint">
            <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="1.5"
                ><path
                    d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14M21 5v14"
                /></svg
            >
        </div>
    </footer>
</div>

<style>
    .scan-page {
        height: 100vh;
        background: #000;
        color: white;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
    }

    .scan-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 60px 20px 20px;
        z-index: 10;
    }

    .scan-header h1 {
        font-size: 18px;
        font-weight: 600;
    }

    .scanner-container {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .scanner-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
    }

    .scan-frame {
        width: 280px;
        height: 180px;
        position: relative;
        background: rgba(255, 255, 255, 0.05);
    }

    .corner {
        position: absolute;
        width: 30px;
        height: 30px;
        border: 4px solid #1a7c50;
    }

    .top-left {
        top: -2px;
        left: -2px;
        border-right: none;
        border-bottom: none;
        border-radius: 12px 0 0 0;
    }
    .top-right {
        top: -2px;
        right: -2px;
        border-left: none;
        border-bottom: none;
        border-radius: 0 12px 0 0;
    }
    .bottom-left {
        bottom: -2px;
        left: -2px;
        border-right: none;
        border-top: none;
        border-radius: 0 0 0 12px;
    }
    .bottom-right {
        bottom: -2px;
        right: -2px;
        border-left: none;
        border-top: none;
        border-radius: 0 0 12px 0;
    }

    .scan-line {
        position: absolute;
        width: 100%;
        height: 2px;
        background: #1a7c50;
        box-shadow: 0 0 15px #1a7c50;
        animation: scan 2.5s ease-in-out infinite;
    }

    @keyframes scan {
        0%,
        100% {
            top: 0%;
        }
        50% {
            top: 100%;
        }
    }

    .camera-placeholder {
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #111, #222);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pulse-circle {
        width: 80px;
        height: 80px;
        background: rgba(26, 124, 80, 0.2);
        border-radius: 50%;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.8);
            opacity: 0.5;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.2;
        }
        100% {
            transform: scale(0.8);
            opacity: 0.5;
        }
    }

    .scan-instructions {
        text-align: center;
        padding: 40px 20px;
        z-index: 10;
    }

    .scan-instructions p {
        font-size: 15px;
        color: #ccc;
        line-height: 1.5;
    }

    .scan-footer {
        padding-bottom: 60px;
        display: flex;
        justify-content: center;
        z-index: 10;
    }

    .barcode-hint {
        opacity: 0.6;
    }
</style>
