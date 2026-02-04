<script>
    import { goto } from "$app/navigation";
    import { isCardExpanded, selectedCard } from "$lib/stores.js";
    import { Bell, Mic, Pizza, Search } from "@lucide/svelte";
    const quickAccess = [
        {
            title: "My Courses",
            icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
            path: "/courses",
        },
        {
            title: "Exams & Results",
            icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v7",
            path: "/results",
        },
        {
            title: "Academic Progress",
            icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.502 3.502 0 014.438 0 3.42 3.42 0 001.946 1.006 3.502 3.502 0 010 4.606 3.42 3.42 0 00-1.006 1.946 3.502 3.502 0 010 4.438 3.42 3.42 0 001.006 1.946 3.502 3.502 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.502 3.502 0 01-4.438 0 3.42 3.42 0 00-1.946 1.006 3.502 3.502 0 010-4.606 3.42 3.42 0 001.006-1.946 3.502 3.502 0 010-4.438 3.42 3.42 0 00-1.006-1.946 3.502 3.502 0 014.438 0z",
            path: "/courses",
        },
        {
            title: "Food & Tickets",
            icon: Pizza,
            path: "/docs/food",
        },
    ];

    let currentCard = $state(0);
    let sliderEl;
    let isDragging = false;
    let startX;
    let scrollLeft;

    function handleScroll(e) {
        const sl = e.target.scrollLeft;
        const width = e.target.offsetWidth;
        currentCard = Math.round(sl / width);
    }

    function startDrag(e) {
        isDragging = true;
        startX = (e.pageX || e.touches[0].pageX) - sliderEl.offsetLeft;
        scrollLeft = sliderEl.scrollLeft;
        sliderEl.style.scrollSnapType = "none";
        sliderEl.style.cursor = "grabbing";
    }

    function stopDrag() {
        if (!isDragging) return;
        isDragging = false;
        sliderEl.style.scrollSnapType = "x mandatory";
        sliderEl.style.cursor = "grab";
    }

    function doDrag(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = (e.pageX || e.touches[0].pageX) - sliderEl.offsetLeft;
        const walk = (x - startX) * 1.5;
        sliderEl.scrollLeft = scrollLeft - walk;
    }

    function expandCard(src) {
        selectedCard.set(src);
        isCardExpanded.set(true);
    }
</script>

<div class="dashboard">
    <header class="home-header">
        <div class="user-info">
            <img src="/avatar.png" alt="Sarah" class="avatar" />
            <div class="name-meta">
                <h2>Welcome back Sarah</h2>
                <span>License 3 Student • ISIL</span>
            </div>
        </div>
        <button
            class="notif-btn"
            aria-label="Notifications"
            onclick={() => goto("/notifications")}
        >
            <Bell />
        </button>
    </header>

    <div class="search-container">
        <div class="search-bar">
            <Search color="currentColor" strokeWidth="1" />
            <input
                type="text"
                placeholder="Search courses, professors, services"
            />
            <Mic color="currentColor" strokeWidth="1" />
        </div>
    </div>

    <section class="cards-section">
        <h3>My Cards</h3>
        <div
            class="cards-slider"
            role="group"
            aria-label="Cards carousel"
            bind:this={sliderEl}
            onscroll={handleScroll}
            onmousedown={startDrag}
            onmouseleave={stopDrag}
            onmouseup={stopDrag}
            onmousemove={doDrag}
            ontouchstart={startDrag}
            ontouchend={stopDrag}
            ontouchmove={doDrag}
        >
            <div
                class="card-item"
                onclick={() => expandCard("/student.png")}
                onkeydown={(e) =>
                    e.key === "Enter" && expandCard("/student.png")}
                role="button"
                tabindex="0"
                aria-label="Expand Student Card"
            >
                <img src="/student.png" alt="Student Card" draggable="false" />
            </div>
            <div
                class="card-item"
                onclick={() => expandCard("/transport.png")}
                onkeydown={(e) =>
                    e.key === "Enter" && expandCard("/transport.png")}
                role="button"
                tabindex="0"
                aria-label="Expand Transport Card"
            >
                <img
                    src="/transport.png"
                    alt="Transport Card"
                    draggable="false"
                />
            </div>
        </div>
        <div class="slider-dots">
            <div class="dot" class:active={currentCard === 0}></div>
            <div class="dot" class:active={currentCard === 1}></div>
        </div>
    </section>

    <section class="quick-access">
        <h3>Quick Access</h3>
        <div class="access-grid">
            {#each quickAccess as item}
                <a href={item.path} class="access-card">
                    <div class="card-top">
                        {#if typeof item.icon === "string"}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#114a32"
                                stroke-width="1.5"
                                ><path d={item.icon}></path></svg
                            >
                        {:else}
                            <item.icon strokeWidth="1.5" color="#114a32" />
                        {/if}
                        <div class="arrow-circle">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                stroke-width="3"
                                ><path
                                    d="M19 12H5m7 7l-7-7 7-7"
                                    style="transform: rotate(180deg); transform-origin: center;"
                                /></svg
                            >
                        </div>
                    </div>
                    <span class="card-title">{item.title}</span>
                </a>
            {/each}
        </div>
    </section>
</div>

<style>
    .dashboard {
        padding: 20px 0;
    }

    .home-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin-bottom: 24px;
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

    .notif-btn {
        color: #1c1c1e;
    }

    .search-container {
        padding: 0 16px;
        margin-bottom: 24px;
    }
    .search-bar {
        background: #e0e9eb;
        border-radius: 100px;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .search-bar input {
        border: none;
        background: transparent;
        flex: 1;
        font-family: Inter, sans-serif !important;
        font-size: 14px;
        outline: none;
        color: #1c1c1e;
    }
    .search-icon,
    .mic-icon {
        color: #8e8e93;
    }

    .cards-section {
        margin-bottom: 24px;
    }
    .cards-section h3 {
        padding: 0 20px;
        font-size: 18px;
        margin-bottom: 12px;
    }

    .cards-slider {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 12px;
        padding: 0 16px;
        cursor: grab;
    }
    .cards-slider::-webkit-scrollbar {
        display: none;
    }

    .card-item {
        min-width: 100%;
        scroll-snap-align: center;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

        transform: translateZ(20px);
    }
    .card-item img {
        width: 100%;
        display: block;
    }

    .slider-dots {
        display: flex;
        justify-content: center;
        gap: 4px;
        margin-top: 12px;
    }
    .dot {
        width: 14px;
        height: 4px;
        background: #e5e5ea;
        border-radius: 2px;
        transition: all 0.3s;
    }
    .dot.active {
        background: #114a32;
        width: 24px;
    }

    .quick-access {
        padding: 0 16px;
    }
    .quick-access h3 {
        font-size: 18px;
        margin-bottom: 16px;
    }

    .access-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }
    .access-card {
        background: white;
        padding: 20px;
        border-radius: 20px;
        text-decoration: none;
        color: #1c1c1e;
        display: flex;
        flex-direction: column;
        gap: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }
    .card-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .arrow-circle {
        width: 24px;
        height: 24px;
        background: #114a32;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card-title {
        font-size: 15px;
        font-weight: 600;
        line-height: 1.2;
    }
</style>
