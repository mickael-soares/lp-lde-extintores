/**
 * LD Extintores e Equipamentos - Simulador Reativo em Vue 3 (Local Build)
 * Bom Jesus - PI e Região • @ldextintores.bj
 * Desenvolvido por: Mickael Soares
 */

// =========================================================================
// CONFIGURAÇÃO CENTRAL
// =========================================================================
const CONFIG = {
  whatsappNumber: '5589981217813',
  brandName: 'LD Extintores e Equipamentos',
  instagramHandle: '@ldextintores.bj',
  email: 'ldextintoreseequipamentos@gmail.com',
  address: 'Rua Marechal Deodoro da Fonseca, 475 - Bairro São Pedro, Bom Jesus - PI',
  cnpj: '40.940.673/0001-46',
  storageKey: 'ld_extintores_budget_v3'
};

// =========================================================================
// CATÁLOGO CLEAN & OBJETIVO
// =========================================================================
const CATALOG_CATEGORIES = [
  {
    id: 'extintores-novos',
    label: 'Extintores Novos',
    icon: 'fa-fire-extinguisher',
    subtitle: 'Extintores novos com Selo INMETRO e suporte de parede incluso',
    items: [
      {
        id: 'ext-abc-4kg',
        name: 'Extintor Pó ABC 4kg',
        subtitle: 'Classes A, B e C • Multipropósito',
        badge: 'Mais Vendido',
        featured: true,
        price: 185.00,
        unit: 'un.',
        defaultQty: 2,
        features: [
          'Apaga sólidos, líquidos e painéis elétricos',
          'Selo oficial INMETRO + suporte de parede'
        ]
      },
      {
        id: 'ext-abc-6kg',
        name: 'Extintor Pó ABC 6kg',
        subtitle: 'Classes A, B e C • Alta Capacidade',
        badge: 'Empresas & Galpões',
        price: 225.00,
        unit: 'un.',
        defaultQty: 2,
        features: [
          'Maior capacidade para galpões e mercados',
          'Selo oficial INMETRO + suporte reforçado'
        ]
      },
      {
        id: 'ext-agua-10l',
        name: 'Extintor Água 10L',
        subtitle: 'Classe A • Papel, Madeira e Tecidos',
        badge: 'Classe A',
        price: 195.00,
        unit: 'un.',
        defaultQty: 1,
        features: [
          'Ideal para estoques secos e escritórios',
          'Cilindro 10L certificado com suporte'
        ]
      },
      {
        id: 'ext-co2-6kg',
        name: 'Extintor CO₂ 6kg',
        subtitle: 'Classes B e C • Sem Resíduos',
        badge: 'Elétrica & TI',
        price: 590.00,
        unit: 'un.',
        defaultQty: 1,
        features: [
          'Não danifica eletrônicos nem servidores',
          'Alta pressão com selo INMETRO'
        ]
      },
      {
        id: 'ext-bc-4kg',
        name: 'Extintor Pó BC 4kg',
        subtitle: 'Classes B e C • Líquidos e Elétricos',
        badge: 'Oficinas & Postos',
        price: 165.00,
        unit: 'un.',
        defaultQty: 1,
        features: [
          'Indicado para combustíveis, óleos e máquinas',
          'Selo INMETRO + suporte de fixação'
        ]
      },
      {
        id: 'ext-carreta-50kg',
        name: 'Extintor Sobre Rodas ABC 50kg',
        subtitle: 'Carreta Industrial • Alto Risco',
        badge: 'Agronegócio',
        price: 1890.00,
        unit: 'un.',
        defaultQty: 1,
        features: [
          'Unidade móvel para fazendas, silos e postos',
          'Homologado conforme normas ABNT NBR'
        ]
      }
    ]
  },
  {
    id: 'recarga-manutencao',
    label: 'Recarga & Manutenção',
    icon: 'fa-rotate',
    subtitle: 'Manutenção anual certificada com selo INMETRO, lacre e anel do ano',
    items: [
      {
        id: 'rec-agua-10l',
        name: 'Recarga Extintor Água 10L',
        subtitle: 'Manutenção Anual • Classe A',
        badge: 'Mais Solicitado',
        featured: true,
        price: 75.00,
        unit: 'recarga',
        defaultQty: 2,
        features: [
          'Recarga completa, pressurização e limpeza',
          'Novo selo INMETRO, lacre e anel do ano'
        ]
      },
      {
        id: 'rec-abc-4kg',
        name: 'Recarga Extintor Pó ABC 4kg',
        subtitle: 'Manutenção Anual • Pó ABC',
        badge: 'Padrão Comercial',
        featured: true,
        price: 95.00,
        unit: 'recarga',
        defaultQty: 2,
        features: [
          'Agente químico ABC certificado de alta pureza',
          'Novo selo INMETRO, lacre e anel do ano'
        ]
      },
      {
        id: 'rec-abc-6kg',
        name: 'Recarga Extintor Pó ABC 6kg',
        subtitle: 'Manutenção Anual • Pó ABC 6kg',
        badge: 'Galpões & Lojas',
        price: 115.00,
        unit: 'recarga',
        defaultQty: 2,
        features: [
          'Recarga completa para cilindros ABC de 6kg',
          'Selo oficial INMETRO e garantia de 12 meses'
        ]
      },
      {
        id: 'rec-bc-4kg',
        name: 'Recarga Extintor Pó BC 4kg / 6kg',
        subtitle: 'Manutenção Anual • Pó BC',
        badge: 'Custo-Benefício',
        price: 85.00,
        unit: 'recarga',
        defaultQty: 2,
        features: [
          'Recarga BC e pressurização com nitrogênio',
          'Selo oficial INMETRO, anel e lacre novo'
        ]
      },
      {
        id: 'rec-co2-6kg',
        name: 'Recarga Extintor CO₂ 6kg',
        subtitle: 'Dióxido de Carbono Alta Pressão',
        badge: 'Alta Pressão',
        price: 160.00,
        unit: 'recarga',
        defaultQty: 1,
        features: [
          'Recarga por pesagem eletrônica com CO₂ puro',
          'Revisão de válvula + selo oficial INMETRO'
        ]
      },
      {
        id: 'teste-hidrostatico',
        name: 'Teste Hidrostático do Cilindro',
        subtitle: 'Obrigatório a cada 5 anos (Nível 3)',
        badge: 'Norma ABNT',
        price: 45.00,
        unit: 'cilindro',
        defaultQty: 2,
        features: [
          'Ensaio de pressão e repintura técnica',
          'Indispensável para vistoria dos Bombeiros'
        ]
      }
    ]
  },
  {
    id: 'sinalizacao',
    label: 'Placas de Sinalização',
    icon: 'fa-signs-post',
    subtitle: 'Placas fotoluminescentes em PVC antichama (padrão NBR 13434)',
    items: [
      {
        id: 'placa-extintor',
        name: 'Placa Fotoluminescente "Extintor"',
        subtitle: 'PVC Rígido • Brilha no Escuro',
        badge: 'Obrigatória',
        featured: true,
        price: 18.00,
        unit: 'un.',
        defaultQty: 4,
        features: [
          'Sinalização obrigatória acima de cada extintor',
          'Padrão NBR 13434 com fácil fixação'
        ]
      },
      {
        id: 'placa-rota-saida',
        name: 'Placa "Saída de Emergência"',
        subtitle: 'Fotoluminescente Verde • Rota de Fuga',
        badge: 'Rota de Fuga',
        price: 22.00,
        unit: 'un.',
        defaultQty: 3,
        features: [
          'Orienta a saída segura mesmo sem energia',
          'Modelos com seta direcional, escada ou porta'
        ]
      },
      {
        id: 'placa-hidrante',
        name: 'Placa Fotoluminescente "Hidrante"',
        subtitle: 'Sinalização de Abrigo e Mangueira',
        badge: 'Combate',
        price: 20.00,
        unit: 'un.',
        defaultQty: 2,
        features: [
          'Identificação imediata de caixas de hidrante',
          'Alta durabilidade e brilho noturno'
        ]
      },
      {
        id: 'placa-risco-inflamavel',
        name: 'Placa Alerta (Inflamáveis / Tóxico)',
        subtitle: 'Produtos Inflamáveis • Material Tóxico',
        badge: 'Alerta NR-26',
        price: 24.00,
        unit: 'un.',
        defaultQty: 2,
        features: [
          'Indispensável para depósitos, postos e fazendas',
          'Impressão resistente ao sol e umidade'
        ]
      },
      {
        id: 'demarcacao-solo',
        name: 'Demarcação de Solo (1m x 1m)',
        subtitle: 'Adesivo Vermelho e Amarelo de Piso',
        badge: 'Piso Comercial',
        price: 65.00,
        unit: 'un.',
        defaultQty: 2,
        features: [
          'Demarca a área livre abaixo do extintor',
          'Material antiderrapante de alta resistência'
        ]
      }
    ]
  },
  {
    id: 'iluminacao-acessorios',
    label: 'Luminárias & Suportes',
    icon: 'fa-lightbulb',
    subtitle: 'Luminárias de emergência LED autônomas e suportes para extintores',
    items: [
      {
        id: 'lum-30leds',
        name: 'Luminária de Emergência 30 LEDs',
        subtitle: 'Autônoma Bivolt • Até 6h de Duração',
        badge: 'Mais Vendida',
        featured: true,
        price: 38.00,
        unit: 'un.',
        defaultQty: 4,
        features: [
          'Acende automaticamente na queda de energia',
          'Ideal para lojas, corredores e recepções'
        ]
      },
      {
        id: 'lum-1200-blumenau',
        name: 'Luminária Blumenau 1.200 Lúmens',
        subtitle: '2 Faróis Direcionáveis • Alta Potência',
        badge: 'Galpões & Fazendas',
        featured: true,
        price: 165.00,
        unit: 'un.',
        defaultQty: 2,
        features: [
          'Dois faróis LED potentes para grandes áreas',
          'Longa autonomia e carcaça antichama'
        ]
      },
      {
        id: 'suporte-tripe',
        name: 'Suporte de Piso Tripé Cromado',
        subtitle: 'Para Extintores de 4kg, 6kg e 10L',
        badge: 'Sem Furar Parede',
        price: 55.00,
        unit: 'un.',
        defaultQty: 2,
        features: [
          'Instale o extintor sem precisar furar paredes',
          'Acabamento elegante para clínicas e lojas'
        ]
      },
      {
        id: 'abrigo-extintor',
        name: 'Caixa Abrigo para Extintor',
        subtitle: 'Proteção contra Sol, Chuva e Poeira',
        badge: 'Área Externa',
        price: 180.00,
        unit: 'un.',
        defaultQty: 1,
        features: [
          'Protege o cilindro em pátios, postos e fazendas',
          'Pintura eletrostática com visor frontal'
        ]
      }
    ]
  },
  {
    id: 'vistoria-kits',
    label: 'Kits Prontos',
    icon: 'fa-box-open',
    subtitle: 'Combos completos para regularizar seu estabelecimento com economia',
    items: [
      {
        id: 'kit-comercio-essencial',
        name: 'Kit Comércio Essencial',
        subtitle: '2 Extintores ABC 4kg + 3 Placas + 2 Luminárias',
        badge: 'Combo Loja',
        featured: true,
        price: 460.00,
        unit: 'kit',
        defaultQty: 1,
        features: [
          '2x Extintores ABC 4kg Novos + 3x Placas NBR',
          '2x Luminárias de Emergência 30 LEDs Bivolt'
        ]
      },
      {
        id: 'kit-galpao-agro',
        name: 'Kit Galpão & Agronegócio',
        subtitle: '4 Extintores + 2 Luminárias 1.200lm + 6 Placas',
        badge: 'Combo Agro',
        price: 1290.00,
        unit: 'kit',
        defaultQty: 1,
        features: [
          '3x Extintores ABC 6kg + 1x Água 10L Novos',
          '2x Luminárias 1.200lm + 6x Placas Fotoluminescentes'
        ]
      },
      {
        id: 'visita-inspecao',
        name: 'Visita Técnica & Coleta no Local',
        subtitle: 'Avaliação presencial dos seus extintores',
        badge: 'Bom Jesus e Região',
        price: 0.00,
        priceLabel: 'Sob Consulta',
        unit: 'visita',
        defaultQty: 1,
        features: [
          'Conferência de validade, lacre e pressão no local',
          'Coleta programada para recarga certificada'
        ]
      }
    ]
  }
];

const ITEMS_MAP = {};
CATALOG_CATEGORIES.forEach(cat => {
  cat.items.forEach(item => {
    ITEMS_MAP[item.id] = { ...item, categoryId: cat.id, categoryLabel: cat.label };
  });
});

// =========================================================================
// UTILITÁRIOS GLOBAIS
// =========================================================================
function formatBRL(value) {
  return Number(value || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function openDirectWhatsApp(customMessage) {
  const msg = encodeURIComponent(
    customMessage ||
      `Olá, ${CONFIG.brandName}! Vim pelo site e gostaria de solicitar um orçamento.`
  );
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// =========================================================================
// APP VUE 3 #1: SIMULADOR DE ORÇAMENTO & CATÁLOGO (index.html)
// =========================================================================
function mountCatalogVueApp() {
  const mountEl = document.getElementById('ld-catalog-app');
  if (!mountEl || typeof Vue === 'undefined') return;

  const { createApp, ref, reactive, computed, watch, onMounted } = Vue;

  const app = createApp({
    setup() {
      const categories = ref(CATALOG_CATEGORIES);
      const activeCategory = ref(CATALOG_CATEGORIES[0].id);
      const isDrawerOpen = ref(false);
      const cart = reactive({}); // { [itemId]: qty }
      const customer = reactive({
        name: '',
        company: '',
        city: 'Bom Jesus - PI',
        deliveryMode: 'Coleta / Entrega no Local',
        notes: ''
      });

      // Restaurar do localStorage
      try {
        const raw = localStorage.getItem(CONFIG.storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed?.cart) {
            Object.entries(parsed.cart).forEach(([k, v]) => {
              const q = typeof v === 'object' ? v.qty : Number(v);
              if (q > 0 && ITEMS_MAP[k]) cart[k] = q;
            });
          }
          if (parsed?.customer) {
            Object.assign(customer, parsed.customer);
          }
        }
      } catch (e) {
        // ignore
      }

      // Persistir alterações automaticamente
      watch(
        () => ({ cart: { ...cart }, customer: { ...customer } }),
        val => {
          try {
            localStorage.setItem(CONFIG.storageKey, JSON.stringify(val));
          } catch (e) {
            // ignore
          }
          syncHeaderBadge();
        },
        { deep: true }
      );

      const currentCategory = computed(
        () => categories.value.find(c => c.id === activeCategory.value) || categories.value[0]
      );

      const cartEntries = computed(() => {
        const list = [];
        Object.keys(cart).forEach(id => {
          const qty = Number(cart[id] || 0);
          const item = ITEMS_MAP[id];
          if (item && qty > 0) {
            list.push({
              item,
              qty,
              subtotal: item.price * qty
            });
          }
        });
        return list;
      });

      const distinctCount = computed(() => cartEntries.value.length);
      const totalItems = computed(() => cartEntries.value.reduce((acc, e) => acc + e.qty, 0));
      const totalAmount = computed(() => cartEntries.value.reduce((acc, e) => acc + e.subtotal, 0));
      const hasConsultItems = computed(() => cartEntries.value.some(e => e.item.price === 0));
      const hasAny = computed(() => distinctCount.value > 0);

      const formattedTotal = computed(() => {
        if (totalAmount.value > 0) {
          return `${formatBRL(totalAmount.value)}${hasConsultItems.value ? ' + Visita' : ''}`;
        }
        return 'Sob Consulta';
      });

      function getCategoryCount(cat) {
        return cat.items.reduce((sum, it) => sum + Number(cart[it.id] || 0), 0);
      }

      function selectCategory(catId) {
        activeCategory.value = catId;
      }

      function addItem(item) {
        const current = Number(cart[item.id] || 0);
        cart[item.id] = current > 0 ? current + 1 : item.defaultQty || 1;
        showToast(`${item.name} adicionado!`);
      }

      function stepQty(itemId, delta) {
        const next = Number(cart[itemId] || 0) + delta;
        if (next <= 0) {
          delete cart[itemId];
        } else {
          cart[itemId] = Math.min(next, 999);
        }
      }

      function onInputQty(itemId, event) {
        const val = parseInt(event.target.value, 10);
        if (isNaN(val) || val <= 0) {
          delete cart[itemId];
        } else {
          cart[itemId] = Math.min(val, 999);
        }
      }

      function removeItem(itemId) {
        delete cart[itemId];
      }

      function clearBudget() {
        Object.keys(cart).forEach(k => delete cart[k]);
        showToast('Orçamento limpo.');
      }

      function openDrawer() {
        isDrawerOpen.value = true;
        document.body.style.overflow = 'hidden';
      }

      function closeDrawer() {
        isDrawerOpen.value = false;
        document.body.style.overflow = '';
      }

      function syncHeaderBadge() {
        const headerBadge = document.getElementById('header-budget-badge');
        if (headerBadge) {
          headerBadge.textContent = distinctCount.value;
          headerBadge.classList.toggle('hidden', distinctCount.value === 0);
        }
      }

      function sendBudgetToWhatsApp() {
        if (!hasAny.value) {
          showToast('Adicione pelo menos 1 item ao orçamento.');
          return;
        }

        const lines = [
          `Olá, *${CONFIG.brandName}*!`,
          `Montei meu orçamento pelo site:`,
          ''
        ];

        if (customer.name.trim()) lines.push(`- *Nome:* ${customer.name.trim()}`);
        if (customer.company.trim()) lines.push(`- *Empresa/Local:* ${customer.company.trim()}`);
        lines.push(`- *Cidade:* ${customer.city.trim() || 'Bom Jesus - PI'}`);
        lines.push(`- *Atendimento:* ${customer.deliveryMode}`);
        lines.push('');
        lines.push('*ITENS SELECIONADOS:*');

        cartEntries.value.forEach(({ item, qty, subtotal }) => {
          const pricePart =
            item.price > 0
              ? `(${formatBRL(item.price)}) = *${formatBRL(subtotal)}*`
              : `*(Sob Consulta)*`;
          lines.push(`- ${qty}x ${item.name} ${pricePart}`);
        });

        if (totalAmount.value > 0) {
          lines.push('');
          lines.push(`*Total estimado:* ${formatBRL(totalAmount.value)}`);
        }

        if (customer.notes.trim()) {
          lines.push('');
          lines.push(`*Observações:* ${customer.notes.trim()}`);
        }

        lines.push('');
        lines.push('Podemos confirmar disponibilidade e condições?');

        const text = encodeURIComponent(lines.join('\n'));
        window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
      }

      onMounted(() => {
        syncHeaderBadge();
        window.openBudgetDrawer = openDrawer;
        window.closeBudgetDrawer = closeDrawer;
        window.selectCatalogCategory = catId => {
          activeCategory.value = catId;
        };
        document.addEventListener('keydown', e => {
          if (e.key === 'Escape' && isDrawerOpen.value) closeDrawer();
        });
      });

      return {
        categories,
        activeCategory,
        currentCategory,
        cart,
        customer,
        isDrawerOpen,
        cartEntries,
        distinctCount,
        totalItems,
        totalAmount,
        hasAny,
        formattedTotal,
        formatBRL,
        getCategoryCount,
        selectCategory,
        addItem,
        stepQty,
        onInputQty,
        removeItem,
        clearBudget,
        openDrawer,
        closeDrawer,
        sendBudgetToWhatsApp
      };
    }
  });

  app.mount(mountEl);
}

// =========================================================================
// APP VUE 3 #2: TRABALHE CONOSCO (trabalhe-conosco.html)
// =========================================================================
function mountJobsVueApp() {
  const mountEl = document.getElementById('ld-jobs-app');
  if (!mountEl || typeof Vue === 'undefined') return;

  const { createApp, reactive } = Vue;

  const jobs = [
    {
      title: 'Técnico em Manutenção',
      roleValue: 'Técnico(a) em Manutenção e Recarga',
      icon: 'fa-screwdriver-wrench',
      desc: 'Inspeção, recarga, pressurização e testes de extintores nos padrões INMETRO.'
    },
    {
      title: 'Comercial & Vendas',
      roleValue: 'Consultor(a) Comercial / Vendas',
      icon: 'fa-handshake',
      desc: 'Atendimento a empresas, comércios e fazendas em Bom Jesus - PI e região.'
    },
    {
      title: 'Adm. & Atendimento',
      roleValue: 'Auxiliar Administrativo / Atendimento',
      icon: 'fa-desktop',
      desc: 'Emissão de notas, controle de ordens de serviço, atendimento na loja e WhatsApp.'
    },
    {
      title: 'Logística & Coleta',
      roleValue: 'Logística / Coleta e Entrega',
      icon: 'fa-truck-fast',
      desc: 'Coleta e entrega técnica de extintores e equipamentos nos clientes (CNH A/B).'
    }
  ];

  createApp({
    setup() {
      const form = reactive({
        name: '',
        phone: '',
        city: 'Bom Jesus - PI',
        role: 'Técnico(a) em Manutenção e Recarga',
        cnh: 'Sim - Categoria A/B',
        availability: 'Integral (Segunda a Sábado)',
        summary: ''
      });

      function selectRole(roleValue) {
        form.role = roleValue;
        document.getElementById('form-candidatura')?.scrollIntoView({ behavior: 'smooth' });
        showToast(`Vaga selecionada: ${roleValue}`);
      }

      function validateForm() {
        if (!form.name.trim() || !form.phone.trim()) {
          showToast('Preencha seu nome e WhatsApp para enviar.');
          document.getElementById('job-name')?.focus();
          return false;
        }
        return true;
      }

      function sendViaWhatsApp() {
        if (!validateForm()) return;

        const lines = [
          `Olá, equipe da *${CONFIG.brandName}*!`,
          `Gostaria de enviar minha candidatura pelo site (*Trabalhe Conosco*):`,
          '',
          `- *Nome:* ${form.name.trim()}`,
          `- *WhatsApp:* ${form.phone.trim()}`,
          `- *Cidade/Bairro:* ${form.city.trim() || 'Bom Jesus - PI'}`,
          `- *Área de Interesse:* ${form.role}`,
          `- *Possui CNH:* ${form.cnh}`,
          `- *Disponibilidade:* ${form.availability}`
        ];

        if (form.summary.trim()) {
          lines.push('');
          lines.push('*Resumo / Experiência:*');
          lines.push(form.summary.trim());
        }

        lines.push('');
        lines.push('Vou anexar meu currículo em PDF aqui na conversa!');

        const text = encodeURIComponent(lines.join('\n'));
        window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
      }

      function sendViaEmail() {
        if (!validateForm()) return;

        const subject = encodeURIComponent(`Currículo - ${form.role} - ${form.name.trim()}`);
        const bodyLines = [
          `Olá, equipe da ${CONFIG.brandName},`,
          '',
          `Segue minha apresentação profissional enviada pela página Trabalhe Conosco:`,
          '',
          `Nome: ${form.name.trim()}`,
          `Telefone / WhatsApp: ${form.phone.trim()}`,
          `Cidade / Bairro: ${form.city.trim() || 'Bom Jesus - PI'}`,
          `Área de Interesse: ${form.role}`,
          `Possui CNH: ${form.cnh}`,
          `Disponibilidade: ${form.availability}`,
          '',
          `Resumo da Experiência:`,
          form.summary.trim() || '(Em anexo no currículo)',
          '',
          `*(Lembrete: Anexe seu currículo em PDF a este e-mail antes de clicar em Enviar)*`
        ];

        const body = encodeURIComponent(bodyLines.join('\n'));
        window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
      }

      return {
        jobs,
        form,
        selectRole,
        sendViaWhatsApp,
        sendViaEmail
      };
    }
  }).mount(mountEl);
}

// =========================================================================
// INICIALIZAÇÃO GERAL (Menu, FAQ e Observers)
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  mountCatalogVueApp();
  mountJobsVueApp();

  // Menu Mobile
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Accordion FAQ
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Intersection Observer para animações fade-up
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
