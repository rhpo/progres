<script>
    import { fly } from "svelte/transition";

    const announcements = [
        {
            id: 1,
            title: "Ouverture club CODIHA!",
            subtitle: "Rejoignez le club CODIHA et participez à nos activités!",
            time: "8h ago",
            image: "/announcement1.png",
            hasCalendar: true,
        },
        {
            id: 2,
            title: "Upcoming Deadline",
            subtitle: "Assignment due next week",
            time: "12h ago",
            image: "/announcement2.png",
            hasCalendar: false,
        },
    ];

    const jobs = [
        {
            id: 1,
            title: "Stage SONATRACH",
            image: "/job1.png",
        },
        {
            id: 2,
            title: "Contribution au club CODIHA",
            image: "/job2.png",
        },
    ];
</script>

<div class="university-page">
    <header class="page-header">
        <h1>University</h1>
    </header>

    <div class="main-content">
        <div class="uni-card">
            <div class="uni-logo-box">
                <span class="esst-logo">
                    <img src="/esst.png" width="100" alt="ESST Logo" />
                </span>
            </div>
            <div class="uni-name">
                ÉCOLE SUPÉRIEURE DES SCIENCES ET TECHNOLOGIES
            </div>
        </div>

        <a href="/docs/food" class="food-card">
            <div class="food-left">
                <div class="coffee-icon">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#114a32"
                        stroke-width="2"
                        ><path
                            d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM6 2v3m4-3v3m4-3v3"
                        /></svg
                    >
                </div>
                <span class="food-label">Food services</span>
            </div>
            <div class="arrow-btn">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="3"><path d="M9 18l6-6-6-6" /></svg
                >
            </div>
        </a>

        <section class="content-section">
            <div class="section-header">
                <h2>Announcements</h2>
                <a href="/docs/announcements" class="see-more"
                    >See more <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"><path d="M9 18l6-6-6-6" /></svg
                    ></a
                >
            </div>
            <div class="horizontal-scroll">
                {#each announcements as item}
                    <div class="announcement-card">
                        <div class="card-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div class="card-body">
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                            <div class="card-footer">
                                <span class="time-text">{item.time}</span>
                                {#if item.hasCalendar}
                                    <div class="icon-badge">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#114a32"
                                            stroke-width="2.5"
                                            ><rect
                                                x="3"
                                                y="4"
                                                width="18"
                                                height="18"
                                                rx="2"
                                                ry="2"
                                            /><line
                                                x1="16"
                                                y1="2"
                                                x2="16"
                                                y2="6"
                                            /><line
                                                x1="8"
                                                y1="2"
                                                x2="8"
                                                y2="6"
                                            /><line
                                                x1="3"
                                                y1="10"
                                                x2="21"
                                                y2="10"
                                            /></svg
                                        >
                                    </div>
                                {/if}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <section class="content-section">
            <div class="section-header">
                <h2>Jobs and opportunities</h2>
                <a href="/docs/jobs" class="see-more"
                    >See more <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"><path d="M9 18l6-6-6-6" /></svg
                    ></a
                >
            </div>
            <div class="horizontal-scroll">
                {#each jobs as item}
                    <div class="job-card">
                        <div class="job-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div class="job-body">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    </div>
</div>

<style>
    .university-page {
        background: #f8f9fa;
        min-height: 100vh;
        padding-bottom: 120px;
    }

    .page-header {
        padding: 20px;
        background: white;
        text-align: center;
        margin-bottom: 10px;
    }

    .page-header h1 {
        font-size: 20px;
        font-weight: 700;
        color: #1c1c1e;
    }

    .main-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .uni-card {
        background: white;
        border-radius: 12px;
        padding: 24px;
        display: flex;
        align-items: center;
        gap: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .uni-logo-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .esst-logo {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .blue-text {
        font-family: "Poppins", sans-serif;
        font-weight: 800;
        font-size: 28px;
        color: #004a99;
        letter-spacing: -1px;
    }

    .line {
        height: 4px;
        width: 100%;
        background: #004a99;
        margin-top: -4px;
    }

    .uni-name {
        font-size: 15px;
        font-weight: 700;
        color: #1c1c1e;
        line-height: 1.3;
        max-width: 200px;
    }

    .food-card {
        background: white;
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        text-decoration: none;
    }

    .food-left {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .coffee-icon {
        width: 44px;
        height: 44px;
        background: #f0f7f3;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .food-label {
        font-size: 16px;
        font-weight: 600;
        color: #3a3a3c;
    }

    .arrow-btn {
        width: 32px;
        height: 32px;
        background: #114a32;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
    }

    .content-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 0 4px;
    }

    .section-header h2 {
        font-size: 19px;
        font-weight: 700;
        color: #1c1c1e;
    }

    .see-more {
        font-size: 13px;
        color: #8e8e93;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: 500;
    }

    .horizontal-scroll {
        display: flex;
        gap: 12px;
        overflow-x: auto;
        padding: 4px;
        scroll-snap-type: x mandatory;
    }

    .horizontal-scroll::-webkit-scrollbar {
        display: none;
    }

    .announcement-card {
        min-width: 220px;
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        scroll-snap-align: start;
        border: 1px solid #efeff4;
    }

    .card-image {
        width: 100%;
        height: 120px;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-body {
        padding: 14px;
    }

    .card-body h3 {
        font-size: 15px;
        font-weight: 700;
        color: #1c1c1e;
        margin-bottom: 4px;
    }

    .card-body p {
        font-size: 12px;
        color: #8e8e93;
        margin-bottom: 12px;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .time-text {
        font-size: 11px;
        font-weight: 600;
        color: #114a32;
    }

    .icon-badge {
        width: 24px;
        height: 24px;
        background: #f0f7f3;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .job-card {
        min-width: 180px;
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        scroll-snap-align: start;
        border: 1px solid #efeff4;
    }

    .job-image {
        width: 100%;
        height: 140px;
    }

    .job-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .job-body {
        padding: 12px;
    }

    .job-body h3 {
        font-size: 14px;
        font-weight: 700;
        color: #1c1c1e;
        margin: 0;
    }
</style>
