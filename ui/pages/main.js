/* ── RESPOSTAS AUTOMÁTICAS ── */
const respostas = {
    'oi':        'Olá! Bem-vindo ao suporte da TechEdu. Como posso te ajudar?',
    'olá':       'Olá! Bem-vindo ao suporte da TechEdu. Como posso te ajudar?',
    'ola':       'Olá! Bem-vindo ao suporte da TechEdu. Como posso te ajudar?',
    'curso':     'Temos cursos de Programação, Design, Marketing Digital e muito mais! Acesse a página de cursos para ver todos.',
    'cursos':    'Temos cursos de Programação, Design, Marketing Digital e muito mais! Acesse a página de cursos para ver todos.',
    'preço':     'Os preços variam por curso. Acesse a página do curso desejado para ver o valor.',
    'preco':     'Os preços variam por curso. Acesse a página do curso desejado para ver o valor.',
    'valor':     'Os preços variam por curso. Acesse a página do curso desejado para ver o valor.',
    'matricula': 'Para se matricular, crie uma conta e acesse a página do curso desejado!',
    'matrícula': 'Para se matricular, crie uma conta e acesse a página do curso desejado!',
    'certificado': 'Sim, todos os cursos emitem certificado ao final!',
    'suporte':   'Estou aqui para ajudar! Me diga qual é a sua dúvida.',
    'contato':   'Você pode nos contatar pelo e-mail: suporte@techedu.com.br',
    'email':     'Nosso e-mail é: suporte@techedu.com.br',
    'tchau':     'Até logo! Qualquer dúvida é só chamar 😊',
    'obrigado':  'Por nada! Estamos sempre à disposição 😊',
    'obrigada':  'Por nada! Estamos sempre à disposição 😊',
};
 
function getResposta(texto) {
    const lower = texto.toLowerCase();
    for (const chave in respostas) {
        if (lower.includes(chave)) return respostas[chave];
    }
    return 'Não entendi sua dúvida. Tente perguntar sobre cursos, matrícula, preços ou certificados!';
}
 
/* ── ENVIA MENSAGEM ── */
function sendMessage() {
    const input = document.getElementById('message-input');
    const text  = input.value.trim();
    if (!text) return;
 
    input.value = '';
    appendUserMessage(text);
 
    setTimeout(() => {
        appendBotMessage(getResposta(text));
    }, 600);
}
 
/* ── ENTER PARA ENVIAR ── */
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('message-input');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); sendMessage(); }
        });
    }
 
    appendBotMessage('Olá! 👋 Bem-vindo ao suporte da TechEdu. Como posso te ajudar?');
});
 
/* ── RENDERIZA MENSAGENS ── */
function appendUserMessage(text) {
    const historic = document.getElementById('historic');
    const div = document.createElement('div');
    div.className = 'msg-user';
    div.innerHTML = `
        <div class="msg-bubble msg-bubble--user">${escapeHtml(text)}</div>
        <span class="msg-time">${getTime()}</span>`;
    historic.appendChild(div);
    scrollBottom();
}
 
function appendBotMessage(text) {
    const historic = document.getElementById('historic');
    const div = document.createElement('div');
    div.className = 'msg-bot';
    div.innerHTML = `
        <div class="msg-bubble msg-bubble--bot">${escapeHtml(text)}</div>
        <span class="msg-time">${getTime()}</span>`;
    historic.appendChild(div);
    scrollBottom();
}
 
/* ── HELPERS ── */
function scrollBottom() {
    const h = document.getElementById('historic');
    if (h) h.scrollTop = h.scrollHeight;
}
 
function getTime() {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}
 
function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
 





/*const API_KEY = ''; 

let conversationHistory = [];
let isLoading = false;
 
/* ── ENVIA MENSAGEM ── 
async function sendMessage() {
    const input = document.getElementById('message-input');
    const text  = input.value.trim();
    if (!text || isLoading) return;
 
    input.value = '';
    appendUserMessage(text);
    conversationHistory.push({ role: 'user', parts: [{ text }] });
 
    setLoading(true);
    document.getElementById('status').textContent = 'Digitando...';
 
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
                    contents: conversationHistory
                })
            }
        );
 
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error?.message || `HTTP ${response.status}`);
        }
 
        const data  = await response.json();
        const reply = data.candidates[0].content.parts[0].text;
 
        conversationHistory.push({ role: 'model', parts: [{ text: reply }] });
        appendBotMessage(reply);
 
    } catch (err) {
        let msg = 'Erro ao conectar com a IA.';
        if (err.message.includes('400')) msg = 'API Key inválida. Verifique a chave no main.js.';
        if (err.message.includes('429')) msg = 'Limite de requisições atingido. Aguarde.';
        appendBotMessage('⚠️ ' + msg);
    } finally {
        setLoading(false);
        document.getElementById('status').textContent = '';
    }
}*/
 
/* ── ENTER PARA ENVIAR ── 
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('message-input');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); sendMessage(); }
        });
    }
});*/
 
/* ── MENSAGEM DO USUÁRIO ── 
function appendUserMessage(text) {
    const historic = document.getElementById('historic');
    const div = document.createElement('div');
    div.className = 'msg-user';
    div.innerHTML = `
        <div class="msg-bubble msg-bubble--user">${escapeHtml(text)}</div>
        <span class="msg-time">${getTime()}</span>`;
    historic.appendChild(div);
    scrollBottom();
}*/
 
/* ── MENSAGEM DO BOT ── 
function appendBotMessage(text) {
    const historic = document.getElementById('historic');
    const div = document.createElement('div');
    div.className = 'msg-bot';
    div.innerHTML = `
        <div class="msg-bubble msg-bubble--bot">${formatText(text)}</div>
        <span class="msg-time">${getTime()}</span>`;
    historic.appendChild(div);
    scrollBottom();
}*/
 
/* ── HELPERS ── 
function setLoading(state) {
    isLoading = state;
    const btn = document.getElementById('btn-submit');
    if (!btn) return;
    btn.disabled = state;
    btn.textContent = state ? 'Aguarde...' : 'Enviar';
}*/
 
/*function scrollBottom() {
    const h = document.getElementById('historic');
    if (h) h.scrollTop = h.scrollHeight;
}
 
function getTime() {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}
 
function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}*/
 
//function formatText(str) {
   // return escapeHtml(str)
       // .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
       // .replace(/\n/g, '<br>');
//} 
 