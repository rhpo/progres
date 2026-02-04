<script>
    import { fly } from "svelte/transition";
    let activeTab = $state("Daily");
    let showCalendar = $state(false);
    let selectedDate = $state(2);

    const dailyCourses = [
        {
            time: "09\n00",
            type: "TD",
            name: "Artificial intelligence 2",
            code: "ISC542",
            prof: "DR.Bensaid",
            color: "#8e8e93",
            past: true,
        },
        {
            time: "11\n30",
            type: "Cours",
            name: "Artificial intelligence 2",
            code: "ISC542",
            prof: "DR.Bensaid",
            color: "#1a7c50",
        },
        {
            time: "14\n00",
            type: "TP",
            name: "Artificial intelligence 2",
            code: "ISC542",
            prof: "DR.Bensaid",
            color: "#007aff",
        },
        {
            time: "14\n00",
            type: "TD",
            name: "Artificial intelligence 2",
            code: "ISC542",
            prof: "DR.Bensaid",
            color: "#f1c40f",
        },
    ];

    const weeklySections = [
        { title: "Today’s courses", courses: dailyCourses },
        {
            title: "Tomorrow courses",
            courses: [
                {
                    time: "14\n00",
                    type: "TP",
                    name: "Artificial intelligence 2",
                    code: "ISC542",
                    prof: "DR.Bensaid",
                    color: "#007aff",
                },
            ],
        },
        {
            title: "23/21/2025",
            courses: [
                {
                    time: "11\n30",
                    type: "Cours",
                    name: "Artificial intelligence 2",
                    code: "ISC542",
                    prof: "DR.Bensaid",
                    color: "#1a7c50",
                },
                {
                    time: "14\n00",
                    type: "TP",
                    name: "Artificial intelligence 2",
                    code: "ISC542",
                    prof: "DR.Bensaid",
                    color: "#007aff",
                },
            ],
        },
        {
            title: "27/21/2025",
            courses: [
                {
                    time: "14\n00",
                    type: "TD",
                    name: "Artificial intelligence 2",
                    code: "ISC542",
                    prof: "DR.Bensaid",
                    color: "#f1c40f",
                },
            ],
        },
    ];

    const calendarDays = [
        { d: 31, prev: true },
        { d: 30, prev: true },
        { d: 1 },
        { d: 2, today: true, dots: ["#1a7c50", "#007aff", "#f1c40f"] },
        { d: 3, dots: ["#007aff", "#1a7c50"] },
        { d: 4 },
        { d: 5 },
        { d: 6, dots: ["#1a7c50"] },
        { d: 7 },
        { d: 8, dots: ["#1a7c50"] },
        { d: 9 },
        { d: 10, dots: ["#007aff", "#f1c40f", "#1a7c50"] },
        { d: 11 },
        { d: 12 },
        { d: 13, dots: ["#007aff", "#007aff"] },
        { d: 14 },
        { d: 15, dots: ["#1a7c50", "#1a7c50"] },
        { d: 16 },
        { d: 17, dots: ["#1a7c50"] },
        { d: 18 },
        { d: 19 },
        { d: 20, dots: ["#1a7c50", "#1a7c50"] },
        { d: 21 },
        { d: 22, dots: ["#1a7c50", "#f1c40f", "#007aff"] },
        { d: 23, dots: ["#1a7c50"] },
        { d: 24 },
        { d: 25 },
        { d: 26 },
        { d: 27 },
        { d: 28 },
        { d: 29, dots: ["#007aff", "#1a7c50", "#1a7c50"] },
        { d: 30 },
        { d: 31, dots: ["#f1c40f", "#007aff", "#1a7c50"] },
        { d: 1, next: true },
        { d: 2, next: true },
    ];
</script>

<div class="calendar-page">
    <header class="page-header">
        <div style="width: 40px"></div>
        <h1>Schedule</h1>
        <button
            class="cal-btn"
            onclick={() => (showCalendar = !showCalendar)}
            aria-label="Toggle calendar"
        >
            <div class="cal-icon-wrapper" class:active={showCalendar}>
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    ><rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                    /><line x1="16" y1="2" x2="16" y2="6" /><line
                        x1="8"
                        y1="2"
                        x2="8"
                        y2="6"
                    /><line x1="3" y1="10" x2="21" y2="10" /><path
                        d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"
                    /></svg
                >
            </div>
        </button>
    </header>

    <div class="tabs-container">
        <div class="tabs">
            <button
                class:active={activeTab === "Weekly" && !showCalendar}
                onclick={() => {
                    activeTab = "Weekly";
                    showCalendar = false;
                }}>Weekly</button
            >
            <button
                class:active={activeTab === "Daily" || showCalendar}
                onclick={() => (activeTab = "Daily")}>Daily</button
            >
        </div>
    </div>

    <div class="scroll-content">
        {#if showCalendar}
            <div class="calendar-view" in:fly={{ y: -10, duration: 300 }}>
                <div class="calendar-card">
                    <div class="month-selector">
                        <button class="arrow" aria-label="Previous month">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                ><path d="M15 18l-6-6 6-6" /></svg
                            >
                        </button>
                        <div class="month-year">
                            <span class="month">January</span>
                            <span class="year">2025</span>
                        </div>
                        <button class="arrow" aria-label="Next month">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                ><path d="M9 18l6-6-6-6" /></svg
                            >
                        </button>
                    </div>
                    <div class="days-week">
                        {#each ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as day}
                            <span>{day}</span>
                        {/each}
                    </div>
                    <div class="days-grid">
                        {#each calendarDays as day}
                            <button
                                class="day-btn"
                                class:dimmed={day.prev || day.next}
                                class:selected={day.d === selectedDate &&
                                    !day.prev &&
                                    !day.next}
                                onclick={() =>
                                    !day.prev &&
                                    !day.next &&
                                    (selectedDate = day.d)}
                            >
                                {day.d}
                                {#if day.dots}
                                    <div class="dots">
                                        {#each day.dots as color}
                                            <div
                                                class="dot"
                                                style="background: {color}"
                                            ></div>
                                        {/each}
                                    </div>
                                {/if}
                            </button>
                        {/each}
                    </div>
                </div>
                <h3 class="schedule-title">
                    {selectedDate} January 2025 schedule:
                </h3>
                <div class="schedule-list">
                    {#each dailyCourses.slice(1) as course}
                        <div class="course-pill">
                            <div
                                class="indicator"
                                style="background: {course.color}"
                            ></div>
                            <div
                                class="time-box"
                                style="background: {course.color}15; color: {course.color}"
                            >
                                {course.time}
                            </div>
                            <div class="course-info">
                                <div
                                    class="type-pill"
                                    style="color: {course.color}; border-color: {course.color}40"
                                >
                                    {course.type}
                                </div>
                                <div class="text-content">
                                    <h4>{course.name}</h4>
                                    <div class="meta">
                                        {course.code} •
                                        <span>{course.prof}</span>
                                    </div>
                                </div>
                            </div>
                            <svg
                                class="arrow-svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1c1c1e"
                                stroke-width="2"
                                ><path d="M5 12h14M12 5l7 7-7 7" /></svg
                            >
                        </div>
                    {/each}
                </div>
            </div>
        {:else if activeTab === "Daily"}
            <div class="detailed-view" in:fly={{ x: 10, duration: 300 }}>
                <h3 class="section-title">Today’s courses</h3>
                <div class="course-list">
                    {#each dailyCourses as course}
                        <div class="course-pill" class:past={course.past}>
                            <div
                                class="indicator"
                                style="background: {course.color}"
                            ></div>
                            <div
                                class="time-box"
                                style="background: {course.color}15; color: {course.color}"
                            >
                                {course.time}
                            </div>
                            <div class="course-info">
                                <div
                                    class="type-pill"
                                    style="color: {course.color}; border-color: {course.color}40"
                                >
                                    {course.type}
                                </div>
                                <div class="text-content">
                                    <h4
                                        style="color: {course.past
                                            ? '#8e8e93'
                                            : '#1c1c1e'}"
                                    >
                                        {course.name}
                                    </h4>
                                    <div class="meta">
                                        {course.code} •
                                        <span>{course.prof}</span>
                                    </div>
                                </div>
                            </div>
                            <svg
                                class="arrow-svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1c1c1e"
                                stroke-width="2"
                                ><path d="M5 12h14M12 5l7 7-7 7" /></svg
                            >
                        </div>
                    {/each}
                </div>
            </div>
        {:else}
            <div class="weekly-view" in:fly={{ x: -10, duration: 300 }}>
                {#each weeklySections as section}
                    <h3 class="section-title">{section.title}</h3>
                    <div class="course-list">
                        {#each section.courses as course}
                            <div class="course-pill" class:past={course.past}>
                                <div
                                    class="indicator"
                                    style="background: {course.color}"
                                ></div>
                                <div
                                    class="time-box"
                                    style="background: {course.color}15; color: {course.color}"
                                >
                                    {course.time}
                                </div>
                                <div class="course-info">
                                    <div
                                        class="type-pill"
                                        style="color: {course.color}; border-color: {course.color}40"
                                    >
                                        {course.type}
                                    </div>
                                    <div class="text-content">
                                        <h4
                                            style="color: {course.past
                                                ? '#8e8e93'
                                                : '#1c1c1e'}"
                                        >
                                            {course.name}
                                        </h4>
                                        <div class="meta">
                                            {course.code} •
                                            <span>{course.prof}</span>
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    class="arrow-svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1c1c1e"
                                    stroke-width="2"
                                    ><path d="M5 12h14M12 5l7 7-7 7" /></svg
                                >
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    .calendar-page {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: #f8f9fa;
    }

    .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 10px;
        background: white;
    }
    .page-header h1 {
        font-size: 19px;
        font-weight: 700;
        color: #1c1c1e;
    }
    .cal-btn {
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cal-icon-wrapper {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1a7c50;
        background: #d4e9df;
        border: 1px solid #1a7c50;
        transition: all 0.2s;
    }
    .cal-icon-wrapper:not(.active) {
        background: transparent;
        color: #8e8e93;
        border-color: transparent;
    }

    .tabs-container {
        background: white;
        border-bottom: 2px solid #f2f2f7;
    }
    .tabs {
        display: flex;
        padding: 0;
    }
    .tabs button {
        flex: 1;
        padding: 14px 0;
        font-size: 16px;
        font-weight: 500;
        color: #8e8e93;
        border-bottom: 3px solid transparent;
        transition: all 0.2s;
    }
    .tabs button.active {
        color: #114a32;
        border-bottom-color: #114a32;
    }

    .scroll-content {
        flex: 1;
        overflow-y: auto;
        padding-bottom: 120px;
    }

    .section-title {
        font-size: 16px;
        font-weight: 500;
        margin: 24px 20px 12px;
        color: #1c1c1e;
    }
    .schedule-title {
        font-size: 16px;
        font-weight: 500;
        margin: 0 20px 16px;
        color: #1c1c1e;
    }

    .course-list,
    .schedule-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 0 16px;
    }
    .course-pill {
        background: white;
        border-radius: 12px;
        padding: 12px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        border: 1px solid #f2f2f7;
        position: relative;
        overflow: hidden;
    }
    .course-pill.past {
        opacity: 0.6;
    }
    .indicator {
        position: absolute;
        left: 0;
        top: 12px;
        bottom: 12px;
        width: 4px;
        border-radius: 0 4px 4px 0;
    }

    .time-box {
        width: 44px;
        height: 44px;
        border-radius: 8px;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        white-space: pre-line;
        line-height: 1.2;
        font-weight: 600;
    }

    .course-info {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .type-pill {
        font-size: 10px;
        font-weight: 700;
        padding: 2px 8px;
        border-radius: 100px;
        background: #f8f9fa;
        border: 1.5px solid transparent;
    }
    .text-content h4 {
        font-size: 15px;
        font-weight: 600;
        margin: 0;
        color: #1c1c1e;
    }
    .meta {
        font-size: 11px;
        color: #8e8e93;
        margin-top: 2px;
    }
    .meta span {
        opacity: 0.8;
    }

    .calendar-view {
        padding-top: 16px;
    }
    .calendar-card {
        background: white;
        margin: 0 16px 20px;
        padding: 16px;
        border-radius: 16px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    }
    .month-selector {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .month-year {
        text-align: center;
    }
    .month {
        display: block;
        font-size: 17px;
        font-weight: 600;
        color: #1c1c1e;
    }
    .year {
        display: block;
        font-size: 12px;
        color: #8e8e93;
    }
    .arrow {
        width: 32px;
        height: 32px;
        background: #f2f2f7;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1c1c1e;
    }

    .days-week {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        margin-bottom: 12px;
    }
    .days-week span {
        font-size: 12px;
        color: #8e8e93;
        font-weight: 500;
    }

    .days-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        row-gap: 8px;
    }
    .day-btn {
        height: 44px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        border-radius: 12px;
        position: relative;
        color: #1c1c1e;
    }
    .day-btn.dimmed {
        color: #d1d1d6;
    }
    .day-btn.selected {
        background: #114a32;
        color: white;
        width: 44px;
        margin: 0 auto;
    }

    .dots {
        display: flex;
        gap: 2px;
        margin-top: 4px;
    }
    .dots .dot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
    }
</style>
