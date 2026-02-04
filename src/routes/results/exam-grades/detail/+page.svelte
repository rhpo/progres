<script>
    function goBack() {
        window.history.back();
    }
    let activeTab = $state("grades");

    const grades = [
        { name: "Interface Homme Machine", coef: 3, grade: 12.5 },
        { name: "Advanced Database", coef: 3, grade: 14.0 },
        {
            name: "Interface Homme Machine",
            coef: 3,
            grade: 9.5,
            fail: true,
        },
        { name: "Interface Homme Machine", coef: 3, grade: 12.5 },
        { name: "Interface Homme Machine", coef: 3, grade: 12.5 },
        { name: "Interface Homme Machine", coef: 3, grade: 12.5 },
        { name: "Interface Homme Machine", coef: 3, grade: 12.5 },
        { name: "Interface Homme Machine", coef: 3, grade: 12.5 },
        { name: "Interface Homme Machine", coef: 3, grade: 12.5 },
    ];

    const assessments = [
        { name: "Interface Homme Machine", td: 13.0, tp: 12.5 },
        { name: "Advanced Database", td: 9.0, tp: 14.0, td_fail: true },
        {
            name: "Interface Homme Machine",
            td: 10.0,
            tp: 9.5,
            tp_fail: true,
        },
        { name: "Interface Homme Machine", td: 10.0, tp: 12.5 },
        { name: "Interface Homme Machine", td: 10.0, tp: 12.5 },
        { name: "Interface Homme Machine", td: 10.0, tp: 12.5 },
        { name: "Interface Homme Machine", td: 11.0, tp: 12.5 },
        {
            name: "Interface Homme Machine",
            td: 6.0,
            tp: 12.5,
            td_fail: true,
        },
    ];
</script>

<div class="detail-page">
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
        <h1>Exam grades and assessment</h1>
        <div style="width: 24px"></div>
    </header>

    <div class="tab-scroller">
        <div class="tabs">
            <button
                class:active={activeTab === "grades"}
                onclick={() => (activeTab = "grades")}>Exam Grades</button
            >
            <button
                class:active={activeTab === "assessments"}
                onclick={() => (activeTab = "assessments")}>Assessment</button
            >
        </div>
    </div>

    <div class="table-content">
        {#if activeTab === "grades"}
            <div class="header-row">
                <span class="module-col">Module (S1)</span>
                <div class="right-cols">
                    <span>Coef</span>
                    <span>Grade</span>
                </div>
            </div>
            <div class="list">
                {#each grades as item}
                    <div class="data-card">
                        <span class="name">{item.name}</span>
                        <div class="stats">
                            <span class="coef">{item.coef}</span>
                            <span class="grade" class:fail={item.fail}
                                >{item.grade.toFixed(1)}</span
                            >
                            <div class="icon">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#8e8e93"
                                    stroke-width="2"
                                    ><path
                                        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V5A2.5 2.5 0 0 1 6.5 2.5H20"
                                    /></svg
                                >
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
            <div class="footer-row">
                <span class="module-col">Module (S1)</span>
                <div class="right-cols">
                    <span>Coef</span>
                    <span>Grade</span>
                </div>
            </div>
        {:else}
            <div class="header-row">
                <span class="module-col">Module</span>
                <div class="right-cols assessment-cols">
                    <span>TD</span>
                    <span>TP</span>
                </div>
            </div>
            <div class="list">
                {#each assessments as item}
                    <div class="data-card">
                        <span class="name">{item.name}</span>
                        <div class="stats assessment-stats">
                            <span class="score" class:fail={item.td_fail}
                                >{item.td.toFixed(0)}</span
                            >
                            <span class="score" class:fail={item.tp_fail}
                                >{item.tp.toFixed(1)}</span
                            >
                            <div class="icon">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#8e8e93"
                                    stroke-width="2"
                                    ><path
                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                    /></svg
                                >
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    .detail-page {
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

    .tab-scroller {
        background: white;
        padding: 0 16px;
        border-bottom: 1.5px solid #f2f2f7;
        margin-bottom: 12px;
    }
    .tabs {
        display: flex;
        gap: 0;
    }
    .tabs button {
        flex: 1;
        padding: 16px 0;
        font-size: 15px;
        font-weight: 600;
        color: #8e8e93;
        border-bottom: 3px solid transparent;
        transition: all 0.2s;
    }
    .tabs button.active {
        color: #114a32;
        border-bottom-color: #114a32;
    }

    .table-content {
        padding: 0 16px;
        flex: 1;
        overflow-y: auto;
    }
    .header-row,
    .footer-row {
        display: flex;
        justify-content: space-between;
        padding: 12px 10px;
        font-size: 12px;
        color: #8e8e93;
    }
    .right-cols {
        display: flex;
        gap: 24px;
        margin-right: 44px;
    }
    .assessment-cols {
        gap: 40px;
        margin-right: 48px;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .data-card {
        background: white;
        border-radius: 12px;
        padding: 18px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }
    .name {
        font-size: 14px;
        color: #1c1c1e;
        font-weight: 500;
        max-width: 180px;
    }
    .stats {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .assessment-stats {
        gap: 40px;
    }

    .coef,
    .score,
    .grade {
        font-size: 14px;
        font-weight: 600;
        width: 30px;
        text-align: center;
    }
    .grade,
    .score {
        color: #1a7c50;
    }
    .fail {
        color: #e74c3c;
    }
    .coef {
        color: #1c1c1e;
    }

    .icon {
        width: 18px;
        display: flex;
        justify-content: center;
    }
</style>
