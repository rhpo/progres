<script>
    import { goto } from "$app/navigation";
    import { fade, fly } from "svelte/transition";

    let profile = {
        name: "My Profile",
        sub: "profile picture",
        university: "ESST",
        semester: "01",
        section: "B",
        group: "02",
        regNumber: "0555558455666",
        birthDate: "22/05/2005",
        birthPlace: "Cheraga",
    };

    const sections = [
        {
            title: "ACCOUNT INFORMATION",
            items: [
                {
                    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 0 00-7 7h14a7 0 00-7-7z",
                    label: "Personal Information",
                    path: "/profile/personal-info",
                },
            ],
        },
        {
            title: "ACCOUNT SECURITY",
            items: [
                {
                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                    label: "Change Password",
                    path: "/profile/change-password",
                },
            ],
        },
        {
            title: "APPLICATION SETTING",
            items: [
                {
                    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c1.382 3.307 3.416 6.312 5.922 8.82",
                    label: "Language",
                    path: "/profile/language",
                    value: "English",
                },
                {
                    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                    label: "Theme",
                    path: "/profile/theme",
                    value: "Light",
                },
            ],
        },
    ];

    function navigate(path) {
        goto(path);
    }

    let showLogoutModal = $state(false);
</script>

<div class="profile-page">
    <header class="main-header">
        <h1>My Profile</h1>
    </header>

    <div class="avatar-section">
        <div class="avatar-container">
            <div class="avatar">
                <img src="/avatar.png" alt="Profile" />
                <button class="edit-btn" aria-label="Edit avatar">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        ><path
                            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                        /></svg
                    >
                </button>
            </div>
            <span class="sub-text">Profile Picture</span>
        </div>
    </div>

    <div class="profile-card">
        <div class="row">
            <span class="label">University</span>
            <span class="badge blue">ESST</span>
        </div>
        <div class="row">
            <span class="label"
                >Semester – <b>{profile.semester}</b> Section
                <b>{profile.section}</b>
                – Group <b>{profile.group}</b></span
            >
        </div>
        <div class="row">
            <span class="label">Registration number</span>
            <span class="badge green-pill">{profile.regNumber}</span>
        </div>
        <div class="row">
            <span class="label">Date of birth</span>
            <span class="val">{profile.birthDate}</span>
        </div>
        <div class="row">
            <span class="label">Place of birth</span>
            <span class="val">{profile.birthPlace}</span>
        </div>
    </div>

    <div class="settings-list">
        {#each sections as section}
            <h3 class="section-title">{section.title}</h3>
            <div class="section-items">
                {#each section.items as item}
                    <button
                        class="menu-item"
                        onclick={() => navigate(item.path)}
                    >
                        <div class="left">
                            <div class="icon-circle">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><path d={item.icon}></path></svg
                                >
                            </div>
                            <span class="item-label">{item.label}</span>
                        </div>
                        <div class="right">
                            {#if item.value}
                                <span class="item-value">{item.value}</span>
                            {/if}
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#8e8e93"
                                stroke-width="2.5"
                                ><path d="M9 18l6-6-6-6" /></svg
                            >
                        </div>
                    </button>
                {/each}
            </div>
        {/each}

        <button class="logout-btn" onclick={() => (showLogoutModal = true)}>
            <div class="left">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#eb5050"
                    stroke-width="2.5"
                    ><path
                        d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
                    /></svg
                >
                <span>Log out</span>
            </div>
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#eb5050"
                stroke-width="2.5"><path d="M9 18l6-6-6-6" /></svg
            >
        </button>
    </div>

    {#if showLogoutModal}
        <div class="modal-overlay" transition:fade={{ duration: 200 }}>
            <div class="modal-card" in:fly={{ y: 20, duration: 300 }}>
                <h2>Are you sure you want to leave?</h2>
                <div class="divider"></div>
                <p>
                    You must log in again if you want to use this application.
                </p>
                <div class="modal-actions">
                    <button class="btn-primary" onclick={() => goto("/login")}
                        >Log Out</button
                    >
                    <button
                        class="btn-secondary"
                        onclick={() => (showLogoutModal = false)}>Cancel</button
                    >
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .profile-page {
        background: #f8f9fa;
        min-height: 100vh;
        padding-bottom: 120px;
    }

    .main-header {
        padding: 20px;
        background: white;
        text-align: center;
    }
    .main-header h1 {
        font-size: 19px;
        font-weight: 700;
        color: #1c1c1e;
    }

    .avatar-section {
        display: flex;
        justify-content: center;
        padding: 20px 0;
    }
    .avatar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
    .avatar {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        position: relative;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        background: #f2f2f7;
    }
    .avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    .edit-btn {
        position: absolute;
        top: 0;
        right: 0;
        background: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        border: 1px solid #efeff4;
    }
    .sub-text {
        font-size: 15px;
        color: #1c1c1e;
        opacity: 0.8;
    }

    .profile-card {
        background: white;
        margin: 0 16px 24px;
        padding: 22px;
        border-radius: 12px;
        border: 1.5px solid #efeff4;
        display: flex;
        flex-direction: column;
        gap: 14px;
    }
    .row {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .label {
        font-size: 14px;
        color: #8e8e93;
        font-weight: 500;
    }
    .label b {
        color: #1c1c1e;
    }
    .badge {
        padding: 3px 12px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 700;
    }
    .badge.blue {
        background: #007aff;
        color: white;
        border-radius: 8px;
    }
    .badge.green-pill {
        background: #d4e9df;
        color: #1a7c50;
        border-radius: 100px;
        padding: 4px 16px;
        font-weight: 600;
    }
    .val {
        font-size: 14px;
        font-weight: 700;
        color: #1c1c1e;
    }

    .section-title {
        font-size: 13px;
        font-weight: 600;
        color: #8e8e93;
        padding: 0 20px;
        margin: 24px 0 12px;
    }
    .section-items {
        display: flex;
        flex-direction: column;
        background: white;
    }
    .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 20px;
        border-bottom: 1px solid #f2f2f7;
        background: transparent;
        transition: all 0.2s;
    }
    .menu-item:active {
        background: #f2f2f7;
    }
    .left {
        display: flex;
        align-items: center;
        gap: 14px;
    }
    .icon-circle {
        opacity: 0.8;
        color: #1c1c1e;
        display: flex;
        align-items: center;
    }
    .item-label {
        font-size: 15px;
        font-weight: 500;
        color: #1c1c1e;
    }
    .right {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .item-value {
        font-size: 14px;
        color: #8e8e93;
        opacity: 0.8;
    }

    .logout-btn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        margin-top: 32px;
        background: white;
        border: none;
        color: #eb5050;
        font-size: 15px;
        font-weight: 600;
    }
    .logout-btn .left {
        color: #eb5050;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
        border-radius: 47px;
    }

    .modal-card {
        background: white;
        border-radius: 20px;
        padding: 24px;
        width: 100%;
        max-width: 320px;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }

    .modal-card h2 {
        font-size: 18px;
        font-weight: 700;
        color: #1c1c1e;
        margin-bottom: 16px;
    }

    .divider {
        height: 1px;
        background: #f2f2f7;
        margin: 0 -24px 20px;
        opacity: 0.6;
    }

    .modal-card p {
        font-size: 14px;
        color: #3a3a3c;
        line-height: 1.5;
        margin-bottom: 24px;
    }

    .modal-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .btn-primary {
        background: #eb5050;
        color: white;
        padding: 14px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
    }

    .btn-secondary {
        background: white;
        color: #8e8e93;
        padding: 14px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        border: 1.5px solid #efeff4;
    }
</style>
