<script>
    import { fly } from "svelte/transition";

    const tickets = [
        { id: "T-8429", type: "Lunch/Diner Ticket", date: "Feb 4, 2026" },
        { id: "T-8430", type: "Lunch/Diner Ticket", date: "Feb 4, 2026" },
        { id: "T-8431", type: "Lunch/Diner Ticket", date: "Feb 5, 2026" },
    ];
</script>

<div class="food-services-page" in:fly={{ x: 20, duration: 400 }}>
    <header class="page-header">
        <a href="/docs" class="back-link" aria-label="Go back">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
            >
                <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
        </a>
        <h1>Food services</h1>
    </header>

    <main class="main-content">
        <div class="tickets-card">
            <h2 class="card-title">Tickets</h2>
            <div class="tickets-list">
                {#each tickets as ticket}
                    <div class="ticket-item">
                        <div class="ticket-info">
                            <span class="ticket-type">{ticket.type}</span>
                            <span class="ticket-date">{ticket.date}</span>
                        </div>
                        <span class="ticket-id">{ticket.id}</span>
                    </div>
                {/each}
            </div>
        </div>

        <button class="qr-fab" aria-label="Scan QR Code">
            <div class="qr-inner">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#114a32"
                    stroke-width="2"
                >
                    <rect x="3" y="3" width="7" height="7" /><rect
                        x="14"
                        y="3"
                        width="7"
                        height="7"
                    /><rect x="3" y="14" width="7" height="7" /><rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                    /><rect x="7" y="7" width="1" height="1" /><rect
                        x="16"
                        y="7"
                        width="1"
                        height="1"
                    /><rect x="7" y="16" width="1" height="1" />
                </svg>
                <div class="corners">
                    <span class="corner top-left"></span>
                    <span class="corner top-right"></span>
                    <span class="corner bottom-left"></span>
                    <span class="corner bottom-right"></span>
                </div>
            </div>
        </button>
    </main>
</div>

<style>
    .food-services-page {
        background: #f2f2f7;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .page-header {
        padding: 20px;
        display: flex;
        align-items: center;
        gap: 16px;
        background: transparent;
    }

    .back-link {
        color: #1c1c1e;
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .page-header h1 {
        font-size: 19px;
        font-weight: 700;
        color: #1c1c1e;
        margin: 0;
    }

    .main-content {
        padding: 16px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .tickets-card {
        width: 100%;
        background: #dcdcdc;
        border-radius: 12px;
        padding: 20px 0;
        height: 480px;
        display: flex;
        flex-direction: column;
    }

    .card-title {
        font-size: 16px;
        font-weight: 600;
        color: #114a32;
        margin-bottom: 16px;
        text-align: center;
    }

    .tickets-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0 16px;
        overflow-y: auto;
    }

    .ticket-item {
        background: #b4d8c1;
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .ticket-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .ticket-type {
        font-size: 15px;
        font-weight: 600;
        color: #1c1c1e;
    }

    .ticket-date {
        font-size: 12px;
        color: #114a32;
        font-weight: 500;
    }

    .ticket-id {
        font-size: 13px;
        font-weight: 700;
        color: #114a32;
        opacity: 0.7;
    }

    .qr-fab {
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 84px;
        height: 84px;
        background: #d4e9df;
        border-radius: 50%;
        border: 4px solid #ffffff;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 40;
    }

    .qr-inner {
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .corners {
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        pointer-events: none;
    }

    .corner {
        position: absolute;
        width: 10px;
        height: 10px;
        border: 3px solid #114a32;
    }

    .top-left {
        top: 0;
        left: 0;
        border-right: none;
        border-bottom: none;
        border-top-left-radius: 6px;
    }

    .top-right {
        top: 0;
        right: 0;
        border-left: none;
        border-bottom: none;
        border-top-right-radius: 6px;
    }

    .bottom-left {
        bottom: 0;
        left: 0;
        border-right: none;
        border-top: none;
        border-bottom-left-radius: 6px;
    }

    .bottom-right {
        bottom: 0;
        right: 0;
        border-left: none;
        border-top: none;
        border-bottom-right-radius: 6px;
    }
</style>
