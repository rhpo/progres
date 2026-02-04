<script>
    import { goto } from "$app/navigation";

    let profile = {
        firstName: "Sarah",
        lastName: "Said",
        university: "ESST",
        semester: "01",
        section: "B",
        group: "02",
        regNumber: "0555558455666",
        birthDate: "22/05/2005",
        birthPlace: "Cheraga",
        phone: "+213**********",
    };

    function goBack() {
        goto("/profile");
    }
</script>

<div class="personal-info-page">
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
            <span>Personal Information</span>
        </button>
    </header>

    <div class="profile-summary">
        <div class="avatar-box">
            <div class="avatar">
                <img src="/avatar.png" alt="Profile" />
                <button class="edit-icon" aria-label="Edit avatar">
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
            <span class="avatar-label">profile picture</span>
        </div>

        <div class="info-card">
            <div class="info-row">
                <span class="label">University</span>
                <span class="badge blue">ESST</span>
            </div>
            <div class="info-row">
                <span class="label"
                    >Semester – <b>{profile.semester}</b> Section
                    <b>{profile.section}</b>
                    – Group <b>{profile.group}</b></span
                >
            </div>
            <div class="info-row">
                <span class="label">Registration number</span>
                <span class="badge secondary">{profile.regNumber}</span>
            </div>
            <div class="info-row">
                <span class="label">Date of birth</span>
                <span class="value">{profile.birthDate}</span>
            </div>
            <div class="info-row">
                <span class="label">Place of birth</span>
                <span class="value">{profile.birthPlace}</span>
            </div>
        </div>
    </div>

    <div class="form-container">
        <div class="input-group">
            <label for="first-name">First name <span class="dot">·</span></label
            >
            <input id="first-name" type="text" value={profile.firstName} />
        </div>
        <div class="input-group">
            <label for="last-name">Family name</label>
            <input id="last-name" type="text" value={profile.lastName} />
        </div>
        <div class="input-group">
            <label for="phone">phone number</label>
            <input id="phone" type="text" value={profile.phone} />
        </div>

        <button class="save-btn">Save Information</button>
        <p class="hint">You can simply update your profile picture.</p>
    </div>
</div>

<style>
    .personal-info-page {
        background: #f8f9fa;
        min-height: 100%;
    }

    .page-header {
        padding: 20px;
        background: white;
    }
    .back-link {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 18px;
        font-weight: 600;
        color: #1c1c1e;
    }

    .profile-summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
    }

    .avatar-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin-bottom: 20px;
    }
    .avatar {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        position: relative;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
    .avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    .edit-icon {
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
    .avatar-label {
        font-size: 15px;
        color: #1c1c1e;
        opacity: 0.8;
    }

    .info-card {
        background: white;
        margin: 0 16px 24px;
        padding: 24px;
        border-radius: 12px;
        border: 1px solid #efeff4;
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: calc(100% - 32px);
    }
    .info-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
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
        padding: 4px 12px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 700;
    }
    .badge.blue {
        background: #007aff;
        color: white;
        border-radius: 8px;
    }
    .badge.secondary {
        background: #d4e9df;
        color: #1a7c50;
        border-radius: 100px;
        padding: 4px 16px;
        font-weight: 600;
    }
    .value {
        font-size: 14px;
        font-weight: 700;
        color: #1c1c1e;
    }

    .form-container {
        padding: 0 16px 120px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .input-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .input-group label {
        font-size: 14px;
        color: #8e8e93;
        font-weight: 500;
        padding-left: 4px;
    }
    .input-group label .dot {
        color: #1c1c1e;
    }
    .input-group input {
        background: #f2f2f7;
        border: 1px solid transparent;
        padding: 14px 16px;
        border-radius: 10px;
        font-size: 15px;
        color: #1c1c1e;
        transition: all 0.2s;
    }
    .input-group input:focus {
        background: white;
        border-color: #114a32;
    }

    .save-btn {
        background: #114a32;
        color: white;
        padding: 16px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        margin-top: 8px;
    }
    .hint {
        text-align: center;
        font-size: 13px;
        color: #8e8e93;
        margin-top: 10px;
    }
</style>
