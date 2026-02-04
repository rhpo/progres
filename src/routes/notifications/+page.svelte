<script>
    import { fly, fade } from "svelte/transition";
    import { goto } from "$app/navigation";

    const notifications = [
        {
            type: "Update",
            title: "Test points for the Linear Optimization module have been updated",
            time: "1 hr",
        },
        {
            type: "Update",
            title: "Test points for the Dtabases module have been updated",
            time: "1 hr",
        },
        {
            type: "Password change",
            title: "Your password change succusfely",
            time: "1 hr",
        },
        {
            type: "Event",
            title: "A new event is coming up at OMC Club Don’t miss outcheck the details and join us",
            time: "1 hr",
        },
    ];

    function goBack() {
        goto("/");
    }
</script>

<div class="notifications-page">
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
            <span>Notification</span>
        </button>
    </header>

    <div class="notif-list">
        {#each notifications as notif}
            <div class="notif-card">
                <div class="notif-header">
                    <span class="type">{notif.type}</span>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#114a32"
                        stroke-width="2.5"><path d="M9 18l6-6-6-6" /></svg
                    >
                </div>
                <p class="title">{notif.title}</p>
                <span class="time">{notif.time}</span>
            </div>
        {/each}
    </div>
</div>

<style>
    .notifications-page {
        background: #f8f9fa;
        min-height: 100%;
    }
    .page-header {
        padding: 20px;
        background: white;
        border-bottom: 2px solid #f2f2f7;
    }
    .back-link {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 18px;
        font-weight: 600;
        color: #1c1c1e;
    }

    .notif-list {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .notif-card {
        background: white;
        border: 1.5px solid #efeff4;
        border-radius: 12px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        position: relative;
    }

    .notif-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .type {
        font-size: 14px;
        font-weight: 700;
        color: #114a32;
    }

    .title {
        font-size: 14px;
        color: #3a3a3c;
        line-height: 1.4;
        margin: 0;
        padding-right: 20px;
    }
    .time {
        font-size: 12px;
        color: #8e8e93;
        align-self: flex-end;
    }
</style>
