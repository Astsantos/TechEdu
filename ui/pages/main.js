/*respostas*/
const respostas = {
    'oi':        'Olá! Bem-vindo ao suporte da TechEdu. Como posso te ajudar?',
    'olá':       'Olá! Bem-vindo ao suporte da TechEdu. Como posso te ajudar?',
    'ola':       'Olá! Bem-vindo ao suporte da TechEdu. Como posso te ajudar?',
    'quais cursos vocês tem?':     'Temos cursos de Programação Front-End, Programação Back-End, Design, Marketing Digital e muito mais! Acesse a página de cursos para ver todos.',
    'cursos':    'Temos cursos de Programação Front-End, Programação Back-End, Design, Marketing Digital e muito mais! Acesse a página de cursos para ver todos.',
    'qual os horarios de atendimento?': 'Nosso atendimento é de segunda a sexta, das 9h às 18h.',
    'qual os horarios de atendimento': 'Nosso atendimento é de segunda a sexta, das 9h às 18h.',
    'qual os horarios das turmas?': 'As turmas variam por curso. Acesse a página do curso desejado para ver os horários disponíveis.',
    'qual os horarios das turmas': 'As turmas variam por curso. Acesse a página do curso desejado para ver os horários disponíveis.',
    'como me matriculo': 'Para se matricular, crie uma conta e acesse a página do curso desejado!',
    'como me matrículo?': 'Para se matricular, crie uma conta e acesse a página do curso desejado!',
    'esses cursos possuem certificado': 'Sim, todos os cursos emitem certificado ao final!',
    'esses cursos possuem certificado?': 'Sim, todos os cursos emitem certificado ao final!',
    'suporte':   'Estou aqui para ajudar! Me diga qual é a sua dúvida.',
    'qual o contato':   'Você pode nos contatar pelo e-mail: suporte@techedu.com.br',
    'qual o contato?':   'Você pode nos contatar pelo e-mail: suporte@techedu.com.br',
    'qual o email de vocês':     'Nosso e-mail é: suporte@techedu.com.br',
    'qual o email de vocês?':     'Nosso e-mail é: suporte@techedu.com.br',
    'tchau':     'Até logo! Qualquer dúvida é só chamar ',
    'obrigado':  'Por nada! Estamos sempre à disposição ',
    'obrigada':  'Por nada! Estamos sempre à disposição ',
};

/*função que pega as respostas*/

function getResposta(texto) {
    const lower = texto.toLowerCase();
    for (const chave in respostas) {
        if (lower.includes(chave)) return respostas[chave];
    }
    return 'Não entendi sua dúvida. Tente perguntar sobre cursos, matrícula, preços ou certificados!';
}
 
/*envia as mensagens*/
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
 
/*envia*/
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('message-input');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); sendMessage(); }
        });
    }
 
    appendBotMessage('Olá! 👋 Bem-vindo ao suporte da TechEdu. Como posso te ajudar?');
});
 
/*renderiza*/
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
 
/*coisas auxiliares*/
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
 
