<script>
    import { goto } from "$app/navigation";

    let selectedTheme = $state("Light");

    function goBack() {
        goto("/profile");
    }
</script>

<div class="theme-page">
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
            <span>Theme</span>
        </button>
    </header>

    <div class="theme-options">
        <button
            class="theme-card"
            class:active={selectedTheme === "Light"}
            onclick={() => (selectedTheme = "Light")}
        >
            <div class="text">
                <h4>Light Mode</h4>
                <p>Standard color display with white background.</p>
            </div>
            <div class="radio" class:selected={selectedTheme === "Light"}></div>
        </button>

        <button
            class="theme-card"
            class:active={selectedTheme === "Dark"}
            onclick={() => (selectedTheme = "Dark")}
        >
            <div class="text">
                <h4>Dark Mode</h4>
                <p>Standard color display with dark background.</p>
            </div>
            <div class="radio" class:selected={selectedTheme === "Dark"}></div>
        </button>

        <button class="save-btn">Save</button>
    </div>
</div>

<style>
    .theme-page {
        background: #f8f9fa;
        min-height: 100%;
    }

    .page-header {
        padding: 20px;
        background: white;
        margin-bottom: 40px;
    }
    .back-link {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 18px;
        font-weight: 600;
        color: #1c1c1e;
    }

    .theme-options {
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .theme-card {
        background: white;
        border: 1.5px solid #efeff4;
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        transition: all 0.2s;
    }
    .theme-card.active {
        border-color: #114a32;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    }

    .text h4 {
        font-size: 15px;
        font-weight: 600;
        color: #1c1c1e;
        margin-bottom: 4px;
    }
    .text p {
        font-size: 11px;
        color: #8e8e93;
        margin: 0;
    }

    .radio {
        width: 22px;
        height: 22px;
        border: 2px solid #d1d1d6;
        border-radius: 50%;
        position: relative;
    }
    .radio.selected {
        border-color: #114a32;
        background: #114a32;
    }
    .radio.selected::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .save-btn {
        background: #114a32;
        color: white;
        padding: 18px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        margin-top: 24px;
    }
</style>
