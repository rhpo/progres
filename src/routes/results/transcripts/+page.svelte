<script>
    function goBack() {
        window.history.back();
    }
    const years = ["2025/2026", "2024/2025", "2023/2024", "2022/2023"];
    let selectedYear = $state("2025/2026");

    const modules = [
        { name: "Interface Homme-Machine", coef: 3, average: 12.5 },
        { name: "Advanced Database", coef: 3, average: 14.0 },
        {
            name: "Interface Homme-Machine",
            coef: 3,
            average: 9.5,
            fail: true,
        },
        { name: "Interface Homme-Machine", coef: 3, average: 12.5 },
        { name: "Interface Homme-Machine", coef: 3, average: 12.5 },
        { name: "Interface Homme-Machine", coef: 3, average: 12.5 },
        { name: "Interface Homme-Machine", coef: 3, average: 12.5 },
        { name: "Interface Homme-Machine", coef: 3, average: 12.5 },
    ];
</script>

<div class="transcript-page">
    <header class="page-header">
        <button class="back-btn" onclick={goBack} aria-label="Go back">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"><path d="M19 12H5m7 7l-7-7 7-7" /></svg
            >
        </button>
        <h1>Acadimic transcripts</h1>
        <div style="width: 24px"></div>
    </header>

    <div class="year-scroller">
        <div class="year-tabs">
            {#each years as year}
                <button
                    class:active={selectedYear === year}
                    onclick={() => (selectedYear = year)}>{year}</button
                >
            {/each}
        </div>
    </div>

    <div class="table-content">
        <div class="header-row">
            <span class="module-col">Module</span>
            <div class="right-cols">
                <span>Coef</span>
                <span>Average</span>
            </div>
        </div>

        <div class="list">
            {#each modules as mod}
                <div class="data-card">
                    <span class="name">{mod.name}</span>
                    <div class="stats">
                        <span class="coef">{mod.coef}</span>
                        <span class="avg" class:fail={mod.fail}
                            >{mod.average.toFixed(1)}</span
                        >
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="summary-footer">
        <div class="summary-pill">
            <div class="item">
                <span class="label">Annual average:</span>
                <span class="val">12.30</span>
            </div>
            <div class="item">
                <span class="label">Credits:</span>
                <span class="val">60</span>
            </div>
        </div>
    </div>
</div>

<style>
    .transcript-page {
        padding: 40px 0 100px;
        display: flex;
        flex-direction: column;
        background: #f8f9fa;
        height: 100%;
    }
    .page-header {
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid #f2f2f7;
    }
    .page-header h1 {
        font-size: 18px;
        font-weight: 500;
    }

    .year-scroller {
        background: white;
        padding: 12px 0 12px 16px;
        overflow-x: auto;
        border-bottom: 1px solid #f2f2f7;
    }
    .year-scroller::-webkit-scrollbar {
        display: none;
    }
    .year-tabs {
        display: flex;
        gap: 8px;
    }
    .year-tabs button {
        background: #f2f2f7;
        border-radius: 8px;
        padding: 10px 18px;
        font-size: 14px;
        color: #1c1c1e;
        white-space: nowrap;
        transition: all 0.2s;
        border: 1px solid transparent;
    }
    .year-tabs button.active {
        background: #d4e9df;
        color: #1a7c50;
        border-color: #1a7c50;
    }

    .table-content {
        padding: 0 16px;
        flex: 1;
        overflow-y: auto;
    }
    .header-row {
        display: flex;
        justify-content: space-between;
        padding: 12px 10px;
        font-size: 12px;
        color: #8e8e93;
    }
    .right-cols {
        display: flex;
        gap: 40px;
        margin-right: 14px;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 100px;
    }
    .data-card {
        background: white;
        border-radius: 12px;
        padding: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }
    .name {
        font-size: 14px;
        color: #1c1c1e;
        font-weight: 500;
        max-width: 200px;
    }
    .stats {
        display: flex;
        gap: 54px;
    }
    .coef {
        font-size: 14px;
        color: #1c1c1e;
        width: 20px;
        text-align: center;
    }
    .avg {
        font-size: 14px;
        font-weight: 700;
        color: #1a7c50;
        width: 40px;
        text-align: right;
    }
    .fail {
        color: #e74c3c;
    }

    .summary-footer {
        position: absolute;
        bottom: 100px;
        width: 100%;
        padding: 0 16px;
    }
    .summary-pill {
        background: #114a32;
        border-radius: 12px;
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        color: white;
    }
    .item {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .item .label {
        font-size: 14px;
        opacity: 0.9;
    }
    .item .val {
        font-size: 16px;
        font-weight: 700;
    }
</style>
