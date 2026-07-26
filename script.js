// ========== 免签国家列表（五眼联盟 + 西欧） ==========
const VISA_EXEMPT_COUNTRIES = [
    'GBR',  // 英国
    'USA',  // 美国
    'CAN',  // 加拿大
    'AUS',  // 澳大利亚
    'NZL',  // 新西兰
    'AUT',  // 奥地利
    'BEL',  // 比利时
    'DNK',  // 丹麦
    'FIN',  // 芬兰
    'FRA',  // 法国
    'DEU',  // 德国
    'GRC',  // 希腊
    'ISL',  // 冰岛
    'IRL',  // 爱尔兰
    'ITA',  // 意大利
    'LUX',  // 卢森堡
    'NLD',  // 荷兰
    'NOR',  // 挪威
    'PRT',  // 葡萄牙
    'ESP',  // 西班牙
    'SWE',  // 瑞典
    'CHE'   // 瑞士
];

// ========== 工具函数 ==========
function isVisaExempt(code) {
    return VISA_EXEMPT_COUNTRIES.includes(code.toUpperCase());
}

// ========== 数据存储 (localStorage 模拟数据库) ==========
function getApplications() {
    const data = localStorage.getItem('oasis_applications');
    return data ? JSON.parse(data) : [];
}

function saveApplicationsList(apps) {
    localStorage.setItem('oasis_applications', JSON.stringify(apps));
}

function saveApplication(app) {
    const apps = getApplications();
    apps.push(app);
    saveApplicationsList(apps);
}

// ========== UI 消息 ==========
function showMessage(text, type) {
    const msgBox = document.getElementById('resultMessage');
    msgBox.textContent = text;
    msgBox.className = 'message-box ' + type;
    // 5秒后自动隐藏
    clearTimeout(window.msgTimeout);
    window.msgTimeout = setTimeout(() => {
        msgBox.className = 'message-box';
    }, 5000);
}
