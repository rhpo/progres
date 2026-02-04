<script>
    import { goto } from "$app/navigation";

    let showOld = $state(false);
    let showNew = $state(false);
    let showConfirm = $state(false);

    function goBack() {
        goto("/profile");
    }
</script>

<div class="change-password-page">
    <header class="page-header">
        <button class="back-link" onclick={goBack}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1c1c1e"
                stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg
            >
            <span>Change Password</span>
        </button>
    </header>

    <div class="form-container">
        <div class="input-group">
            <label for="old-pass">Old Password</label>
            <div class="input-wrapper">
                <input
                    id="old-pass"
                    type={showOld ? "text" : "password"}
                    placeholder="old password"
                />
                <button
                    class="eye"
                    onclick={() => (showOld = !showOld)}
                    aria-label="Toggle password visibility"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1c1c1e"
                        stroke-width="2"
                        ><path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        /><circle cx="12" cy="12" r="3" /></svg
                    >
                </button>
            </div>
        </div>

        <div class="input-group">
            <label for="new-pass">New password</label>
            <div class="input-wrapper">
                <input
                    id="new-pass"
                    type={showNew ? "text" : "password"}
                    placeholder="new password"
                />
                <button
                    class="eye"
                    onclick={() => (showNew = !showNew)}
                    aria-label="Toggle password visibility"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1c1c1e"
                        stroke-width="2"
                        ><path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        /><circle cx="12" cy="12" r="3" /></svg
                    >
                </button>
            </div>
        </div>

        <div class="input-group">
            <label for="confirm-pass">Confirm New password</label>
            <div class="input-wrapper">
                <input
                    id="confirm-pass"
                    type={showConfirm ? "text" : "password"}
                    placeholder="new password"
                />
                <button
                    class="eye"
                    onclick={() => (showConfirm = !showConfirm)}
                    aria-label="Toggle password visibility"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1c1c1e"
                        stroke-width="2"
                        ><path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        /><circle cx="12" cy="12" r="3" /></svg
                    >
                </button>
            </div>
        </div>

        <button class="action-btn">Change Password</button>
    </div>
</div>

<style>
    .change-password-page {
        background: #f8f9fa;
        min-height: 100%;
    }

    .page-header {
        padding: 20px;
        background: white;
        margin-bottom: 20px;
    }
    .back-link {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 18px;
        font-weight: 600;
        color: #1c1c1e;
    }

    .form-container {
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .input-group label {
        font-size: 15px;
        font-weight: 500;
        color: #1c1c1e;
        padding-left: 2px;
    }

    .input-wrapper {
        position: relative;
    }
    .input-wrapper input {
        width: 100%;
        background: #f2f2f7;
        border: 1.5px solid #efeff4;
        padding: 14px 16px;
        border-radius: 10px;
        font-size: 15px;
        color: #1c1c1e;
    }
    .input-wrapper input::placeholder {
        color: #8e8e93;
        opacity: 0.6;
    }

    .eye {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.6;
    }

    .action-btn {
        background: #114a32;
        color: white;
        padding: 18px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        margin-top: 10px;
    }
</style>
