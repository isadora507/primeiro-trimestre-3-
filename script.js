// Função para simular download do currículo
function downloadResume() {
    // Mostrar modal de confirmação
    const modal = document.getElementById('downloadModal');
    modal.style.display = 'flex';
    
    // Criar conteúdo do currículo em PDF (simulado)
    const resumeContent = `
        CURRÍCULO PROFISSIONAL
        ISADORA FERRAZ MADEIRA
        
        CONTATO:
        Telefone: (43) 99973-5648
        E-mail: isadora.ferraz@email.com
        Localização: Londrina, PR
        
        EXPERIÊNCIA ATUAL:
        Atendente e Gerente de Pet Shop (2022 - Presente)
        Pet Shop Amigo Bicho
        • Gestão da equipe de atendimento
        • Atendimento personalizado aos clientes
        • Controle de estoque e pedidos
        • Treinamento de novos funcionários
        • Resolução de conflitos e feedbacks
        
        EXPERIÊNCIAS ANTERIORES:
        
        Vendedora de Hortifrúti (2021 - 2022)
        Feira Verde Hortifrúti
        • Atendimento ao cliente e vendas
        • Organização e exposição dos produtos
        • Controle de qualidade das mercadorias
        
        Garçonete em Pastelaria (2020 - 2021)
        Pastelaria do Centro
        • Atendimento ao cliente e anotação de pedidos
        • Serviço de mesa e entregas
        • Fechamento de contas e caixa
        
        Caixa em Restaurante (2019 - 2020)
        Restaurante Sabor Caseiro
        • Operação de caixa e fechamento
        • Atendimento ao cliente
        • Conciliação de valores e relatórios
        
        FORMAÇÃO:
        • Ensino Médio Completo - Colégio Estadual Londrina (2019)
        • Curso de Gestão de Pessoas - SENAC (2024 - 2025)
        
        COMPETÊNCIAS:
        • Atendimento ao Cliente
        • Gestão de Equipe
        • Organização
        • Trabalho em Equipe
        • Comunicação
    `;
    
    // Simular download após 1 segundo
    setTimeout(() => {
        // Criar blob e simular download
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Curriculo_Isadora_Ferraz.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Adicionar animação de sucesso
        const modalIcon = document.querySelector('#downloadModal .modal-icon');
        modalIcon.style.color = '#10b981';
        modalIcon.className = 'fas fa-check-circle modal-icon';
    }, 1000);
}

// Função para fechar modal
function closeModal() {
    const modal = document.getElementById('downloadModal');
    modal.style.display = 'none';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('downloadModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de digitação no título (opcional)
function typeWriter() {
    const title = document.querySelector('.profession');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// Iniciar efeitos quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Pequeno atraso para não sobrecarregar
    setTimeout(() => {
        typeWriter();
    }, 500);
    
    // Adicionar classe de animação aos cards quando aparecem na tela
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// Função para alternar tema (claro/escuro) - opcional
let isDarkTheme = true;

function toggleTheme() {
    const body = document.body;
    const root = document.documentElement;
    
    if (isDarkTheme) {
        // Tema claro
        root.style.setProperty('--primary', '#7c3aed');
        root.style.setProperty('--primary-dark', '#6d28d9');
        root.style.setProperty('--primary-light', '#8b5cf6');
        root.style.setProperty('--text-light', '#f5f3ff');
        root.style.setProperty('--text-dark', '#2e1065');
        body.style.background = 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)';
    } else {
        // Tema escuro (original)
        root.style.setProperty('--primary', '#8b5cf6');
        root.style.setProperty('--primary-dark', '#7c3aed');
        root.style.setProperty('--primary-light', '#a78bfa');
        root.style.setProperty('--text-light', '#f5f3ff');
        root.style.setProperty('--text-dark', '#2e1065');
        body.style.background = 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #6d28d9 100%)';
    }
    
    isDarkTheme = !isDarkTheme;
}