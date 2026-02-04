<script>
    const courses = [
        {
            id: 1,
            name: "Interface Homme Machine (IHM)",
            code: "Mr. Riyad Abdelmeziem",
            credits: 6,
            progress: 75,
            color: "#1a7c50",
        },
        {
            id: 2,
            name: "Données Semi Structurés (DSS)",
            code: "Mr. Selmoune Nazih",
            credits: 6,
            progress: 40,
            color: "#007aff",
        },
        {
            id: 3,
            name: "Programmation Orientée Objet",
            code: "Mr. SAADI",
            credits: 4,
            progress: 90,
            color: "#af52de",
        },
        {
            id: 4,
            name: "Recherche Information",
            code: "Mr. Mahmoudi",
            credits: 4,
            progress: 20,
            color: "#ff9500",
        },
    ];
</script>

<div class="courses-page">
    <header class="page-header">
        <h1>My Courses</h1>
    </header>

    <div class="courses-list">
        {#each courses as course}
            <div class="course-card">
                <div class="course-header">
                    <div
                        class="icon-box"
                        style="background: {course.color}20; color: {course.color}"
                    >
                        {course.name
                            .split(" ")
                            .map((n) => (n[0] !== "(" ? n[0] : ""))
                            .join("")}
                    </div>
                    <div class="name-box">
                        <h3>{course.name}</h3>
                        <span>{course.code} • {course.credits} Credits</span>
                    </div>
                </div>

                <div class="progress-section">
                    <div class="progress-header">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div
                            class="progress-fill"
                            style="width: {course.progress}%; background: {course.color}"
                        ></div>
                    </div>
                </div>

                <button class="view-btn">View Materials</button>
            </div>
        {/each}
    </div>
</div>

<style>
    .courses-page {
        padding: 24px 0;
    }
    .page-header {
        padding: 0 20px 20px;
    }
    .page-header h1 {
        font-size: 28px;
        font-weight: 700;
    }

    .courses-list {
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .course-card {
        background: white;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    .course-header {
        display: flex;
        gap: 16px;
        align-items: center;
        margin-bottom: 20px;
    }

    .icon-box {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 16px;
    }

    .name-box h3 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 2px;
    }
    .name-box span {
        font-size: 13px;
        color: #8e8e93;
    }

    .progress-section {
        margin-bottom: 20px;
    }
    .progress-header {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #8e8e93;
        margin-bottom: 6px;
        font-weight: 600;
    }

    .progress-bar {
        height: 6px;
        background: #f2f2f7;
        border-radius: 10px;
        overflow: hidden;
    }
    .progress-fill {
        height: 100%;
        border-radius: 10px;
        transition: width 0.5s ease;
    }

    .view-btn {
        width: 100%;
        padding: 12px;
        background: #f2f2f7;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 600;
        color: #1c1c1e;
    }
</style>
