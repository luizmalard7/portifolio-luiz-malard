// Preferência de tema
const body=document.body,themeButton=document.querySelector('#theme-toggle');
function setTheme(theme){body.dataset.theme=theme;themeButton.textContent=theme==='dark'?'☀':'☾';themeButton.setAttribute('aria-label',theme==='dark'?'Ativar tema claro':'Ativar tema escuro');document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#100b1d':'#faf8ff'}
const savedTheme=localStorage.getItem('luiz-portfolio-theme');
setTheme(savedTheme|| (matchMedia('(prefers-color-scheme:light)').matches?'light':'dark'));
themeButton.addEventListener('click',()=>{const next=body.dataset.theme==='dark'?'light':'dark';setTheme(next);localStorage.setItem('luiz-portfolio-theme',next)});
// Navegação mobile
const menu=document.querySelector('#menu'),menuButton=document.querySelector('#menu-toggle');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}
menuButton.addEventListener('click',()=>{const opened=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(opened))});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
// Modal com informações dos projetos
const projects={
rage_zone:{title:'Rage Zone',description:'Projeto de desenvolvimento web para praticar estrutura de páginas, identidade visual e organização do código. Confira o repositório para conhecer a implementação.',url:'https://github.com/luizmalard7/rage_zone'},
tabelaperiodica:{title:'Tabela Periódica',description:'Projeto com foco na apresentação de elementos da tabela periódica. Uma oportunidade de exercitar a estruturação do conteúdo e a construção de interfaces.',url:'https://github.com/luizmalard7/tabelaperiodica'},
primeiro_projeto:{title:'Primeiro Projeto',description:'Um dos marcos iniciais da minha jornada em programação. É parte do meu processo de experimentar, aprender e melhorar a cada nova versão.',url:'https://github.com/luizmalard7/primeiro_projeto'}};
const modal=document.querySelector('#project-modal');
document.querySelectorAll('.details').forEach(button=>button.addEventListener('click',()=>{const p=projects[button.dataset.project];if(!p)return;document.querySelector('#modal-title').textContent=p.title;document.querySelector('#modal-description').textContent=p.description;document.querySelector('#modal-link').href=p.url;modal.showModal()}));
document.querySelector('#modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});
// Formulário: abre um email pré-preenchido, sem armazenar dados
const form=document.querySelector('#contact-form'),feedback=document.querySelector('#form-feedback');
form.addEventListener('submit',event=>{event.preventDefault();const nome=form.elements.nome.value.trim(),telefone=form.elements.telefone.value.trim(),email=form.elements.email.value.trim(),mensagem=form.elements.mensagem.value.trim();if(!nome||!telefone||!email||!mensagem){feedback.textContent='Preencha todos os campos antes de continuar.';return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){feedback.textContent='Informe um endereço de e-mail válido.';return}const subject=encodeURIComponent('Contato pelo portfólio — '+nome),content=encodeURIComponent('Nome: '+nome+'\nTelefone: '+telefone+'\nE-mail: '+email+'\n\nMensagem:\n'+mensagem);feedback.textContent='Abrindo seu aplicativo de e-mail. Confira e envie a mensagem por lá.';window.location.href='mailto:luizguilhermemcaldeira@gmail.com?subject='+subject+'&body='+content});
