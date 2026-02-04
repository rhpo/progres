<script>
    import { goto } from "$app/navigation";

    let selectedLang = $state("English");
    const languages = ["English", "French", "Arabic"];

    function goBack() {
        goto("/profile");
    }
</script>

<div class="language-page">
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
            <span>Language</span>
        </button>
    </header>

    <div class="lang-list">
        {#each languages as lang}
            <button class="lang-item" onclick={() => (selectedLang = lang)}>
                <span>{lang}</span>
                {#if selectedLang === lang}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#114a32"
                        stroke-width="3"><path d="M20 6L9 17l-5-5" /></svg
                    >
                {/if}
            </button>
        {/each}
    </div>
</div>

<style>
    .language-page {
        background: #f8f9fa;
        min-height: 100%;
    }

    .page-header {
        padding: 20px;
        background: white;
        border-bottom: 3.5px solid transparent;
    }
    .back-link {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 18px;
        font-weight: 600;
        color: #1c1c1e;
    }

    .lang-list {
        display: flex;
        flex-direction: column;
        background: white;
        margin-top: 1px;
    }
    .lang-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #f2f2f7;
        font-size: 16px;
        font-weight: 500;
        color: #1c1c1e;
        transition: background 0.2s;
    }
    .lang-item:active {
        background: #f2f2f7;
    }
</style>
