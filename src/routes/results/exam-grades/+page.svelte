<script>
    import { fly } from "svelte/transition";
    function goBack() {
        window.history.back();
    }

    const steps = [
        {
            number: 1,
            title: "Licence 1: Math informatique",
            year: "2022/2023",
            semesters: [
                { label: "Semester 1: success", type: "success" },
                { label: "Semester 2: Resite", type: "warning" },
                { label: "Semester 2: Fail", type: "error" },
            ],
        },
        {
            number: 2,
            title: "Licence 1: Math informatique",
            year: "2023/2024",
            semesters: [
                { label: "Semester 1: success", type: "success" },
                { label: "Semester 1: success", type: "success" },
            ],
        },
        {
            number: 3,
            title: "Licence 2: Informatique",
            year: "2024/2025",
            semesters: [
                { label: "Semester 1: success", type: "success" },
                { label: "Semester 2: Resite", type: "warning" },
                { label: "Semester 1: success", type: "success" },
            ],
        },
    ];
</script>

<div class="exam-grades-page">
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

    <div class="timeline">
        {#each steps as step}
            <div class="timeline-item">
                <div class="marker-container">
                    <div class="marker">{step.number}</div>
                    <div class="line"></div>
                </div>
                <div class="content">
                    <div class="step-header">
                        <h3>{step.title}</h3>
                        <span>{step.year}</span>
                    </div>
                    <div class="semester-list">
                        {#each step.semesters as sem}
                            <div
                                class="semester-row"
                                class:success={sem.type === "success"}
                                class:warning={sem.type === "warning"}
                                class:error={sem.type === "error"}
                            >
                                <div class="status-icon">
                                    {#if sem.type === "success"}
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            stroke-width="4"
                                            ><path d="M20 6L9 17l-5-5" /></svg
                                        >
                                    {:else if sem.type === "warning"}
                                        !
                                    {:else}
                                        ×
                                    {/if}
                                </div>
                                <div class="semester-pill">
                                    {sem.label}
                                </div>
                            </div>
                        {/each}
                    </div>
                    <a href="/results/exam-grades/detail" class="show-details"
                        >Show Details</a
                    >
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .exam-grades-page {
        padding: 40px 0 100px;
        display: flex;
        flex-direction: column;
    }
    .page-header {
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

    .timeline {
        padding: 24px 20px;
    }
    .timeline-item {
        display: flex;
        gap: 16px;
        margin-bottom: 24px;
        position: relative;
    }

    .marker-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .marker {
        width: 32px;
        height: 32px;
        background: #114a32;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 16px;
        z-index: 2;
    }
    .line {
        flex: 1;
        width: 2px;
        background: #eef1f1;
        margin: 4px 0;
    }
    .timeline-item:last-child .line {
        display: none;
    }

    .content {
        flex: 1;
        padding-bottom: 30px;
    }
    .step-header h3 {
        font-size: 17px;
        font-weight: 500;
        margin: 0;
        color: #1c1c1e;
    }
    .step-header span {
        font-size: 12px;
        color: #8e8e93;
    }

    .semester-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 16px 0;
    }
    .semester-row {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
        height: 36px;
    }

    .status-icon {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
        color: white;
        flex-shrink: 0;
        position: absolute;
        left: -43px;
        z-index: 3;
    }
    .success .status-icon {
        background: #1a7c50;
    }
    .warning .status-icon {
        background: #f39c12;
    }
    .error .status-icon {
        background: #e74c3c;
    }

    .semester-pill {
        flex: 1;
        background: #eef1f1;
        border: 1.5px solid #1a7c50;
        border-radius: 8px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        color: #1a7c50;
        font-weight: 500;
    }
    .success .semester-pill {
        background: #d4e9df;
        border-color: #1a7c50;
        color: #1a7c50;
    }
    .warning .semester-pill {
        background: #fef5e7;
        border-color: #f39c12;
        color: #f39c12;
    }
    .error .semester-pill {
        background: #fdedec;
        border-color: #e74c3c;
        color: #e74c3c;
    }

    .show-details {
        display: block;
        width: 100%;
        padding: 12px;
        background: #114a32;
        color: white;
        text-align: center;
        border-radius: 10px;
        text-decoration: none;
        font-weight: 600;
        margin-top: 10px;
    }
</style>
