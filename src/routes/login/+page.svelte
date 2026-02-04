<script>
    import { goto } from "$app/navigation";
    let rememberMe = $state(false);
    let showError = $state(false);

    let pressTimer;

    function startPress() {
        pressTimer = setTimeout(() => {
            showError = true;
            setTimeout(() => (showError = false), 3000);
            pressTimer = null;
        }, 800); // Long press threshold
    }

    function endPress() {
        if (pressTimer) {
            clearTimeout(pressTimer);
            goto("/");
        }
    }
</script>

<div class="login-page">
    <div class="logo-section">
        <div class="logo-container">
            <img src="/logo.png" alt="Progress Logo" class="main-logo" />
        </div>
        <h1>Progress</h1>
        <p class="subtitle">
            ETU Integrated Management Software<br />Student Portal
        </p>
    </div>

    <div class="form-section">
        <div class="input-group" class:error={showError}>
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
                <input
                    type="text"
                    placeholder="Registration number"
                    value="2345xxxxxxxxxxxx"
                />
            </div>
        </div>

        <div class="input-group" class:error={showError}>
            <div class="input-wrapper">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    ><rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                    /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg
                >
                <input
                    type="password"
                    placeholder="Password"
                    value="**********"
                />
                <button class="eye-btn" aria-label="Toggle password visibility">
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
                </button>
            </div>
        </div>

        <div class="options-row">
            <label class="remember-me">
                <input type="checkbox" bind:checked={rememberMe} />
                <span class="checkmark" class:checked={rememberMe}>
                    {#if rememberMe}
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            stroke-width="4"><path d="M20 6L9 17l-5-5" /></svg
                        >
                    {/if}
                </span>
                Remember me
            </label>

            <a href="/forgot-password" class="forgot-link">forgot password ?</a>
        </div>

        <button
            class="login-btn"
            onmousedown={startPress}
            onmouseup={endPress}
            ontouchstart={startPress}
            ontouchend={endPress}>Login</button
        >

        <a href="/scan" class="qr-btn">
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                ><rect x="3" y="4" width="18" height="16" rx="2" /><path
                    d="M7 8h10M7 12h10M7 16h6"
                /></svg
            >
            Scan Student Card
        </a>
    </div>

    {#if showError}
        <div class="error-toast">
            <div class="error-icon">×</div>
            <p>Incorrect password or registration number. Please try again</p>
        </div>
    {/if}

    <footer class="login-footer">
        <p>
            Copyright 2026 Ministry of Higher<br />Education and Scientific
            Research
        </p>
    </footer>
</div>

<style>
    .login-page {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 24px 20px;
        background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
        position: relative;
    }

    .logo-section {
        text-align: center;
        margin-bottom: 40px;
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
        color: #1c1c1e;
    }

    .subtitle {
        font-size: 13px;
        color: #666;
        line-height: 1.4;
        margin-top: 12px;
    }

    .form-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
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
        border: 1px solid transparent;
        transition: all 0.2s;
    }

    .input-group.error .input-wrapper {
        border-color: #ff3b30;
        background: #fffafa;
    }

    .input-wrapper input {
        border: none;
        flex: 1;
        font-size: 16px;
        outline: none;
        color: #1c1c1e;
    }

    .input-wrapper svg {
        color: #8e8e93;
    }

    .options-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4px;
    }

    .remember-me {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #1c1c1e;
        font-weight: 500;
        cursor: pointer;
    }

    .remember-me input {
        display: none;
    }

    .checkmark {
        width: 20px;
        height: 20px;
        border: 2px solid #ddd;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }

    .checkmark.checked {
        background: #34c759;
        border-color: #34c759;
    }

    .forgot-link {
        color: #007aff;
        font-size: 14px;
        font-weight: 500;
    }

    .login-btn {
        background: #114a32;
        color: white;
        height: 56px;
        border-radius: 12px;
        font-size: 18px;
        font-weight: 600;
        margin-top: 10px;
    }

    .qr-btn {
        background: #1a7c50;
        color: white;
        height: 56px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .error-toast {
        position: absolute;
        bottom: 120px;
        left: 16px;
        right: 16px;
        background: #ff6b6b;
        color: white;
        padding: 16px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideUp 0.3s ease;
        box-shadow: 0 8px 24px rgba(255, 107, 107, 0.3);
    }

    .error-icon {
        width: 24px;
        height: 24px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    .error-toast p {
        margin: 0;
        font-size: 14px;
        line-height: 1.4;
    }

    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .login-footer {
        margin-top: auto;
        text-align: center;
        padding-bottom: 20px;
    }

    .login-footer p {
        font-size: 11px;
        color: #8e8e93;
        line-height: 1.4;
    }
</style>
