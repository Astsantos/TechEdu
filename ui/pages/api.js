const BASE_URL = 'http://localhost:3000/api';

// ── USUÁRIOS ──

async function cadastrarUsuario(dados) {
  const res = await fetch(`${BASE_URL}/usuarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return res.json();
}

async function loginUsuario(email, senha) {
  const res = await fetch(`${BASE_URL}/usuarios/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });
  return res.json();
}

async function buscarPerfil(id) {
  const res = await fetch(`${BASE_URL}/usuarios/${id}`);
  return res.json();
}

// ── CURSOS ──

async function listarCursos() {
  const res = await fetch(`${BASE_URL}/cursos`);
  return res.json();
}

async function buscarCurso(id) {
  const res = await fetch(`${BASE_URL}/cursos/${id}`);
  return res.json();
}

// ── MATRÍCULAS ──

async function realizarMatricula(usuarioId, turmaId) {
  const res = await fetch(`${BASE_URL}/matriculas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      usuarioId,
      turmaId,
      data_matricula: new Date().toISOString().split('T')[0]
    })
  });
  return res.json();
}