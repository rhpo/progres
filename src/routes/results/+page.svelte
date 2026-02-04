<script>
    import { goto } from "$app/navigation";
</script>

<div class="results-page">
    <header class="home-header">
        <div class="user-info">
            <img src="/avatar.png" alt="Sarah" class="avatar" />
            <div class="name-meta">
                <h2>Welcome back Sarah</h2>
                <span>Master 2 student • AI/MI</span>
            </div>
        </div>
        <button class="notif-btn" aria-label="Notifications">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                ><path
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                /></svg
            >
        </button>
    </header>

    <div class="cards-container">
        <a href="/results/exam-grades" class="result-card">
            <div class="card-content">
                <div class="title-row">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                        stroke="none"
                        ><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg
                    >
                    <h3>Exam Grades and Assessment</h3>
                </div>
                <p>
                    View your exam results and continuous assessments in one
                    place and keep track of your progress and performance
                    throughout the semester
                </p>
            </div>
            <div class="card-arrow">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#114a32"
                    stroke-width="2"><path d="M5 12h14m-7-7l7 7-7 7" /></svg
                >
            </div>
        </a>

        <a href="/results/transcripts" class="result-card">
            <div class="card-content">
                <div class="title-row">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                        stroke="none"
                        ><path
                            d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
                        /></svg
                    >
                    <h3>Academic Transcripts</h3>
                </div>
                <p>
                    Access your official academic records, including all
                    completed courses, grades, annual averages, and total
                    credits for all years
                </p>
            </div>
            <div class="card-arrow">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#114a32"
                    stroke-width="2"><path d="M5 12h14m-7-7l7 7-7 7" /></svg
                >
            </div>
        </a>
    </div>
</div>

<style>
    .results-page {
        padding-top: 20px;
    }
    .home-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin-bottom: 40px;
    }
    .user-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
    .name-meta h2 {
        font-size: 18px;
        font-weight: 600;
        margin: 0;
    }
    .name-meta span {
        font-size: 13px;
        color: #8e8e93;
    }

    .cards-container {
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .result-card {
        background: #114a32;
        border-radius: 12px;
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: white;
        gap: 16px;
    }
    .card-content {
        flex: 1;
    }
    .title-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
    }
    .title-row h3 {
        font-size: 18px;
        font-weight: 700;
    }
    .card-content p {
        font-size: 12px;
        line-height: 1.5;
        opacity: 0.9;
        margin: 0;
    }

    .card-arrow {
        width: 32px;
        height: 32px;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
</style>
