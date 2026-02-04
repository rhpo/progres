<script>
    import { goto } from "$app/navigation";
    let step = $state(1); // 1: Get code, 2: Recover
</script>

<div class="recovery-page">
    <div class="logo-section">
        <div class="logo-container">
            <img src="/logo.png" alt="Progress Logo" class="main-logo" />
        </div>
        <h1>Progress</h1>
        <p class="subtitle">
            ETU Integrated Management Software<br />Student Portal
        </p>
    </div>

    <div class="recovery-content">
        <h2>password recovery</h2>

        {#if step === 1}
            <div class="input-group">
                <div class="input-wrapper">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        ><path
                            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        /><circle cx="12" cy="7" r="4" /></svg
                    >
                    <input type="text" value="2345xxxxxxxxxxxx" readonly />
                </div>
            </div>
            <button class="primary-btn" onclick={() => (step = 2)}
                >Get code</button
            >
        {:else}
            <div class="recovery-form">
                <div class="input-group">
                    <div class="input-wrapper">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            ><path
                                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                            /><circle cx="12" cy="7" r="4" /></svg
                        >
                        <input type="text" value="2345xxxxxxxxxxxx" readonly />
                    </div>
                </div>

                <div class="input-group">
                    <div class="input-wrapper centered">
                        <input
                            type="text"
                            placeholder="Enter the code"
                            class="code-input"
                        />
                    </div>
                    <div class="timer">0:30</div>
                </div>

                <div class="info-bubble">
                    <p>
                        we have sent you a recover code on your phone number
                        +213*********
                    </p>
                </div>

                <div class="input-group">
                    <div class="input-wrapper">
                        <input type="password" placeholder="Password" />
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            ><path
                                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            /><circle cx="12" cy="12" r="3" /></svg
                        >
                    </div>
                </div>

                <div class="input-group">
                    <div class="input-wrapper">
                        <input type="password" placeholder="Confirm Password" />
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            ><path
                                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            /><circle cx="12" cy="12" r="3" /></svg
                        >
                    </div>
                </div>

                <button class="primary-btn" onclick={() => goto("/login")}
                    >submit</button
                >
            </div>
        {/if}
    </div>

    <footer class="footer">
        <p>
            Copyright 2026 Ministry of Higher<br />Education and Scientific
            Research
        </p>
    </footer>
</div>

<style>
    .recovery-page {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 24px 20px;
        background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
    }

    .logo-container {
        width: 80px;
        height: 80px;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main-logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .logo-section h1 {
        font-size: 42px;
        font-weight: 400;
        margin: 0;
        text-align: center;
    }
    .subtitle {
        font-size: 13px;
        color: #666;
        text-align: center;
        margin-top: 12px;
        line-height: 1.4;
    }

    .recovery-content {
        width: 100%;
        margin-top: 40px;
    }
    .recovery-content h2 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
        text-align: left;
    }

    .input-group {
        margin-bottom: 16px;
        position: relative;
    }
    .input-wrapper {
        background: white;
        border-radius: 16px;
        padding: 4px 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        height: 56px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }
    .input-wrapper.centered {
        justify-content: center;
    }
    .input-wrapper input {
        border: none;
        flex: 1;
        outline: none;
        font-size: 16px;
        background: transparent;
    }
    .input-wrapper svg {
        color: #8e8e93;
    }

    .code-input {
        text-align: center;
        color: #8e8e93 !important;
    }
    .timer {
        text-align: right;
        color: #333;
        font-size: 14px;
        margin-top: 4px;
        padding-right: 8px;
    }

    .info-bubble {
        background: #4cc7ff;
        color: white;
        padding: 16px 20px;
        border-radius: 20px;
        margin: 20px 0;
        box-shadow: 0 4px 12px rgba(76, 199, 255, 0.3);
    }
    .info-bubble p {
        margin: 0;
        font-size: 14px;
        line-height: 1.4;
        font-weight: 500;
    }

    .primary-btn {
        width: 100%;
        height: 56px;
        background: #114a32;
        color: white;
        border-radius: 12px;
        font-size: 18px;
        font-weight: 600;
        margin-top: 10px;
    }

    .footer {
        margin-top: auto;
        text-align: center;
        padding-bottom: 20px;
    }
    .footer p {
        font-size: 11px;
        color: #8e8e93;
        line-height: 1.4;
    }
</style>
