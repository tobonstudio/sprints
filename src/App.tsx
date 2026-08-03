import { useState } from 'react'

// Palette — Love Notes envelopes: lavender · sage · blush · terracotta · marigold · dusty blue
// Ground: warm paper #f7f4ef  ·  Ink: deep warm brown #2A1F1A
const C = {
  bg:        '#f7f4ef',   // warm paper — main ground
  bgDeep:    '#E6E0D8',   // slightly deeper paper — strip & alt sections
  bgCard:    '#FAF8F4',   // near-white — cards
  ink:       '#2A1F1A',   // deep warm brown — primary text
  rojotobon: '#B01D28',   // rojo TOBÓN — primary accent (CTA, featured, step nums)
  burdeus:   '#6a2131',   // burdeus — deep wine accent
  terraDeep: '#7A2E2E',   // deep terracotta — hover & dark section ground
  blue:      '#4d303f',   // dusty blue — italic accents & Discovery bg
  blueDeep:  '#5A7E9A',   // deeper dusty blue — borders on blue bg
  sage:      '#8A9A80',   // muted sage — labels & tags
  marigold:  '#D4853A',   // warm marigold — CTA hover, philosophy accents
  lavender:  '#c7c0d3',   // soft lavender — subtle accents
  blush:     '#D9A9A0',   // dusty rose — card border featured
  border:    'rgba(42,31,26,0.1)',
  borderMid: 'rgba(42,31,26,0.15)',
  muted:     'rgba(42,31,26,0.48)',
}

const steps = [
  {
    num: '01',
    title: 'Observar',
    short: 'Descubrimos lo que el proyecto ya no ve.',
    detail: 'Auditoría presencial (cuando sea posible): visitamos el proyecto como si fuéramos un cliente y documentamos llegada, fachada, escaparate, señalización, recorrido, ambiente, iluminación, música, olores, atención del equipo, tiempos de espera y oportunidades de mejora. Más auditoría digital completa de Google Maps, web, redes sociales, WhatsApp, reservas, directorios, competencia, fotografía y reseñas.',
  },
  {
    num: '02',
    title: 'Comprender',
    short: 'Analizamos cómo lo viven las personas y el entorno digital.',
    detail: 'Cada proyecto recibe un informe estratégico con diagnóstico general, fortalezas, oportunidades, quick wins, priorización de acciones, plan de crecimiento y roadmap de implementación. Sin datos abstractos: acciones concretas ordenadas por impacto.',
  },
  {
    num: '03',
    title: 'Optimizar',
    short: 'Mejoramos los puntos de contacto de mayor impacto.',
    detail: 'Todos los programas incluyen optimización completa del perfil de Google Maps: categorías, descripción, fotografías, menú o servicios y configuración general. Porque hoy es uno de los puntos de contacto más importantes entre un proyecto y sus futuros clientes.',
  },
  {
    num: '04',
    title: 'Comunicar',
    short: 'Creamos contenido y Discovery Disclaimers™ para ser recordados.',
    detail: 'Los Discovery Disclaimers™ son las frases estratégicas que definen cómo queremos que un proyecto sea descubierto, entendido y recomendado por las personas y por los asistentes de IA. No describen el negocio: describen el contexto en el que alguien necesita ese negocio. Más contenido audiovisual: Reels, Carruseles e Historias.',
  },
  {
    num: '05',
    title: 'Evolucionar',
    short: 'Dejamos un plan claro para que el proyecto siga creciendo solo.',
    detail: 'Customer Journey, mapa de oportunidades, roadmap de 90 días y guía de implementación. Todo lo que necesita el proyecto para crecer de forma autónoma una vez que termine nuestra colaboración.',
  },
]

const plans = [
  {
    name: 'Experience Design',
    price: '800',
    tagline: 'Nuestro programa recomendado. Todo lo anterior con mayor profundidad y contenido.',
    items: [
      'Todo lo del Sprint',
      'Productos, 3 Noticias, Promociones y Eventos en Maps',
      '5 Discovery Disclaimers™ + adaptación a contenidos',
      '3–4 h de grabación · 5 Reels · 3 Carruseles · 3 Packs historias',
      'Customer Journey básico',
      'Recomendaciones UX + experiencia física',
      'Plan de implementación 30 días',
    ],
    featured: false,
  },
  {
    name: 'Experience Sprint',
    price: '500',
    tagline: 'Para pequeños negocios que quieren mejorar rápidamente su experiencia física y digital.',
    items: [
      'Auditoría presencial o virtual',
      'Auditoría digital completa',
      'Informe estratégico + Plan de mejoras',
      'Priorización de acciones + Roadmap inicial',
      'Optimización completa Google Maps',
      '3 Discovery Disclaimers™ personalizados',
      '2 h de grabación · 3 Reels · 3 Carruseles',
    ],
    featured: true,
  },
  {
    name: 'Experience Transformation',
    price: '1.200',
    tagline: 'Para proyectos que quieren comenzar una transformación integral.',
    items: [
      'Todo lo del Design',
      'Gestión continua + 7 Noticias + Estrategia publicaciones',
      '7 Discovery Disclaimers™ + Optimización integral IA',
      'Asistente IA personalizado (prompts, reseñas, ideas)',
      '5 h de grabación · 7 Reels · 5 Carruseles · 5 Packs historias',
      'Customer Journey completo + Mapa de oportunidades',
      'Roadmap 90 días + Reunión estratégica de cierre',
    ],
    featured: false,
  },
]

export default function App() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const toggleStep = (i: number) => setActiveStep(prev => (prev === i ? null : i))
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const [sprintBtnHovered, setSprintBtnHovered] = useState(false)

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, color: C.ink, overflowX: 'hidden' }}>

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 68,
        backdropFilter: 'blur(20px)',
        background: 'rgba(247,244,239,0.92)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div className="nav-inner" style={{
          height: '100%', padding: '0 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          maxWidth: 1400, margin: '0 auto',
        }}>
          <a href="#" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: 20, letterSpacing: '0.12em', color: C.ink, textDecoration: 'none' }}>TOBÓN</a>
          <nav className="nav-links" style={{ display: 'flex', gap: 40 }}>
            <a href="#metodo" className="nav-link">Método</a>
            <a href="#programas" className="nav-link">Programas</a>
            <a href="#filosofia" className="nav-link">Filosofía</a>
          </nav>
          <a href="#contacto" className="btn-outline-pink">Hablemos</a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{
        minHeight: '100vh',
        paddingTop: 68, paddingLeft: 48, paddingRight: 48, paddingBottom: 80,
        position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        overflow: 'hidden',
        background: C.bg,
      }}>
        {/* Metadata row */}
        <div style={{
          position: 'absolute', top: 96, left: 48, right: 48,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted }}>
            Experience Sprints
          </span>
        </div>

        {/* Headline */}
        <div style={{ position: 'relative', maxWidth: 1000, paddingTop: '18vh' }}>
          <div className="hero-headline font-serif" style={{
            fontSize: 'clamp(56px, 10.5vw, 136px)',
            lineHeight: 0.93, margin: 0,
            letterSpacing: '-0.025em', color: C.ink,
          }}>
            <div style={{ display: 'flex', gap: '0.25em' }}>
              <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 200, fontSize: '70px' }}>CADA</div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontStyle: 'italic', fontSize: '70px' }}>DECISIÓN</div>
            </div>
            <div style={{ fontFamily: "'Mynerve', cursive", fontStyle: 'normal', color: C.burdeus, fontWeight: 400, fontSize: '100px' }}>{" Construye"}</div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 200, fontSize: '70px' }}>LA PERCEPCIÓN</div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: '70px', fontStyle: 'italic' }}>DE TU PROYECTO</div>
          </div>

          <div className="hero-bottom" style={{
            marginTop: 52, display: 'flex', flexDirection: 'column', gap: 32,
            alignItems: 'flex-start',
          }}>
            <p style={{
              margin: 0, maxWidth: 400,
              fontSize: 17, lineHeight: 1.65,
              color: C.muted, fontWeight: 300,
            }}>
              {"Entendemos que todo comunica. Cada "}
              <em style={{ fontFamily: "'Lato', sans-serif", fontStyle: 'italic', fontWeight: 400 }}>{"decisión"}</em>
              {", cada interacción y cada punto de contacto construyen la percepción de un proyecto. Por eso analizamos la experiencia completa —desde Google Maps, WhatsApp Business, redes sociales, asistentes de IA y la presencia física— para detectar oportunidades de crecimiento, optimizar cada interacción y crear proyectos más memorables, fáciles de descubrir, elegir y recomendar."}
            </p>
            <a
              href="#programas"
              className="btn-pink"
              style={{ background: sprintBtnHovered ? C.burdeus : C.lavender, color: sprintBtnHovered ? C.lavender : C.burdeus }}
              onMouseEnter={() => setSprintBtnHovered(true)}
              onMouseLeave={() => setSprintBtnHovered(false)}
            >
              Ver Sprints
            </a>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 36, right: 48,
          fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: C.muted, writingMode: 'vertical-rl', opacity: 0.4,
        }}>Scroll</div>
      </section>

      {/* ── STRIP ───────────────────────────────────────────────────── */}
      <div className="strip section-pad" style={{
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '20px 48px',
        display: 'flex', gap: 60, overflowX: 'auto',
        background: C.bg,
      }}>
        {['Auditoría presencial', 'Google Maps', 'Optimización IA', 'Discovery Disclaimers™', 'Contenido audiovisual', 'Customer Journey', 'Estrategia digital'].map(label => (
          <span key={label} style={{
            fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', whiteSpace: 'nowrap', color: C.muted,
          }}>{label}</span>
        ))}
      </div>

      {/* ── EL MÉTODO TOBON ─────────────────────────────────────────── */}
      <section id="metodo" className="section-pad" style={{ padding: '112px 48px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderBottom: `1px solid ${C.border}`,
          paddingBottom: 32, marginBottom: 0,
        }}>
          <h2 style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: '50px',
            margin: 0, letterSpacing: '-0.02em', color: C.ink,
          }}>
            NUESTRO MÉTODO
          </h2>
          <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted }}>
            5 etapas
          </span>
        </div>

        {steps.map((step, i) => (
          <div
            key={step.num}
            className="step-row"
            onClick={() => toggleStep(i)}
            role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && toggleStep(i)}
            aria-expanded={activeStep === i}
          >
            <div className="method-grid" style={{
              display: 'grid', gridTemplateColumns: '80px 1fr 40px',
              alignItems: 'start', gap: 32,
            }}>
              <span style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 13, color: C.burdeus, letterSpacing: '0.1em', paddingTop: 6,
              }}>{step.num}</span>

              <div>
                <h3 style={{
                  fontFamily: "'Mynerve', cursive",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: 'clamp(24px, 3vw, 40px)',
                  margin: 0, letterSpacing: '-0.015em', lineHeight: 1.1, color: C.ink,
                }}>{step.title}</h3>
                <p style={{
                  margin: activeStep === i ? '20px 0 0' : '10px 0 0',
                  fontSize: activeStep === i ? 16 : 14,
                  color: C.muted, lineHeight: 1.7, maxWidth: 620,
                  transition: 'all 0.3s ease',
                }}>
                  {activeStep === i ? step.detail : step.short}
                </p>
              </div>

              <span style={{
                fontSize: 22, fontWeight: 200,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.3s, color 0.2s',
                transform: activeStep === i ? 'rotate(45deg)' : 'none',
                color: activeStep === i ? C.burdeus : C.muted,
                paddingTop: 4, flexShrink: 0,
              }}>+</span>
            </div>
          </div>
        ))}
      </section>

      {/* ── DISCOVERY DISCLAIMERS™ ──────────────────────────────────── */}
      <section className="section-pad" style={{
        background: C.lavender,
        padding: '88px 48px',
        position: 'relative', overflow: 'hidden',
      }}>

        <div style={{ position: 'relative', maxWidth: 860 }}>
          <span style={{
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: C.burdeus, opacity: 1, display: 'block', marginBottom: 20,
          }}>Concepto propio · Exclusivo TOBÓN</span>

          <h2 style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(30px, 5vw, 56px)',
            margin: '0 0 28px', letterSpacing: '-0.015em', lineHeight: 1.15,
            color: C.burdeus,
          }}>Discovery Disclaimers™</h2>

          <p style={{ fontSize: 18, lineHeight: 1.75, color: C.bg, margin: '0 0 20px', fontWeight: 300 }}>
            {"Las frases estratégicas que definen "}
            <strong style={{ fontWeight: 600, color: C.bg }}>{"cómo queremos que un proyecto sea descubierto, entendido y recomendado"}</strong>
            {" por las personas y por los asistentes de IA."}
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: C.bg, margin: 0 }}>
            No describen el negocio. Describen el contexto en el que alguien necesita ese negocio:
            el mejor brunch para celebrar un cumpleaños, el hotel boutique para una escapada
            de fin de semana, el restaurante perfecto para una comida de negocios.
          </p>
          <div style={{ marginTop: 44, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {['Google Maps', 'Web', 'Redes sociales', 'IA · ChatGPT · Gemini', 'WhatsApp Business'].map(label => (
              <span key={label} style={{
                padding: '8px 16px',
                border: `1px solid ${C.burdeus}`,
                color: C.burdeus,
                fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMAS ───────────────────────────────────────────────── */}
      <section id="programas" className="section-pad" style={{ padding: '112px 48px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderBottom: `1px solid ${C.border}`,
          paddingBottom: 32, marginBottom: 56,
        }}>
          <h2 style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            margin: 0, letterSpacing: '-0.015em', color: C.ink,
          }}>PROGRAMAS</h2>
          <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted }}>
            Todos comienzan igual
          </span>
        </div>

        <div className="plans-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1, background: C.border,
        }}>
          {plans.map(plan => {
            const isHovered = hoveredPlan === plan.name
            const anotherHovered = hoveredPlan !== null && !isHovered
            // featured: destacado siempre excepto cuando otro card está en hover
            // no-featured: destacado solo cuando está en hover
            const showFeaturedStyle = plan.featured
              ? !anotherHovered
              : isHovered
            return (
            <div
              key={plan.name}
              className="plan-card"
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              style={{
                background: showFeaturedStyle ? C.bgCard : C.bg,
                padding: '44px 36px', position: 'relative',
                borderTop: `3px solid ${showFeaturedStyle ? C.lavender : 'transparent'}`,
                transition: 'background 0.25s, border-color 0.25s',
              }}
            >
              {plan.featured && showFeaturedStyle && (
                <span style={{
                  position: 'absolute', top: -1, right: 36,
                  background: C.lavender, color: C.burdeus,
                  fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
                  padding: '4px 14px',
                }}>Recomendado</span>
              )}

              <h3 style={{
                fontFamily: "'Mynerve', cursive",
                fontWeight: 400,
                fontSize: 26, margin: '0 0 28px',
                letterSpacing: '-0.01em', lineHeight: 1.15, color: C.ink,
              }}>{plan.name}</h3>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 16 }}>
                <span style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 52, fontWeight: 500,
                  letterSpacing: '-0.035em',
                  color: showFeaturedStyle ? C.lavender : C.ink,
                  lineHeight: 1, transition: 'color 0.25s',
                }}>{plan.price}</span>
                <span style={{ fontSize: 22, color: C.muted, fontWeight: 300 }}>€</span>
              </div>

              <p style={{ fontSize: 13, lineHeight: 1.65, color: C.muted, margin: '0 0 32px', fontWeight: 300 }}>
                {plan.tagline}
              </p>

              <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 28, marginBottom: 36 }}>
                {plan.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 13 }}>
                    <span style={{ color: C.burdeus, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 13, lineHeight: 1.55, color: C.muted }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contacto" className={showFeaturedStyle ? 'btn-featured' : 'btn-outline-cream'}>
                Empezar ahora
              </a>
            </div>
            )
          })}
        </div>

        <p style={{ marginTop: 32, fontSize: 13, color: C.muted, textAlign: 'center', letterSpacing: '0.02em' }}>
          Los tres programas comienzan exactamente igual · La calidad del análisis no varía con el nivel
        </p>
      </section>

      {/* ── FILOSOFÍA ────────────────────────────────────────────────── */}
      <section id="filosofia" className="section-pad" style={{
        padding: '112px 48px',
        borderTop: `1px solid ${C.border}`,
        maxWidth: 1400, margin: '0 auto',
      }}>
        <span style={{
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: C.sage, display: 'block', marginBottom: 48,
        }}>Nuestra filosofía</span>

        <blockquote style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          margin: '0 0 88px',
          fontSize: 'clamp(26px, 4.5vw, 56px)',
          lineHeight: 1.17, letterSpacing: '-0.02em',
          maxWidth: 980, fontStyle: 'normal', color: C.ink,
        }}>
          {"Observamos, conectamos & optimizamos la experiencia completa de tu proyecto para que sea más fácil de "}
          <em style={{ fontFamily: "'Mynerve', cursive", fontStyle: 'normal', color: '#B01D28', fontSize: '1.15em' }}>{"encontrar"}</em>
          {", "}
          <em style={{ fontFamily: "'Mynerve', cursive", fontStyle: 'normal', color: '#d9401e', fontSize: '1.15em' }}>{"elegir"}</em>
          {" & "}
          <em style={{ fontFamily: "'Mynerve', cursive", fontStyle: 'normal', color: '#B01D28', fontSize: '1.15em' }}>{"recomendar"}</em>
          {"."}
        </blockquote>

        <div className="philosophy-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40,
        }}>
          {[
            { label: 'DISEÑAMOS PERCEPCIÓN', sub: 'No piezas.',      color: C.lavender },
            { label: 'DISEÑAMOS DIRECCIÓN',  sub: 'No documentos.',  color: C.blush    },
            { label: 'PENSAMOS EN SISTEMAS', sub: 'No en canales.',  color: C.sage     },
          ].map((item, i) => (
            <div key={i} style={{ borderTop: `2px solid ${item.color}`, paddingTop: 24 }}>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 600,
                fontSize: 16, margin: '0 0 8px',
                letterSpacing: '0.04em', color: C.ink,
              }}>{item.label}</p>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: 20, margin: 0,
                color: item.color,
              }}>{item.sub}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 64, fontSize: 15, lineHeight: 1.8, color: C.muted, fontWeight: 300, maxWidth: 760 }}>
          Lo que evoluciona entre un SPRINT y otro es el nivel de implementación,
          la generación de contenido, el tiempo de acompañamiento y las herramientas que entregamos
          para que el proyecto siga creciendo de forma autónoma. No importa el tamaño del proyecto:
          todos merecen un análisis profundo y una estrategia sólida.
        </p>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section id="contacto" className="section-pad" style={{
        background: C.burdeusDeep,
        padding: '100px 48px',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Dusty-blue glow */}
       <div style={{
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  background: '#4C2027'
}} />


        <div style={{ position: 'relative' }}>
          <span style={{
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(240,236,229,0.4)', display: 'block', marginBottom: 28,
          }}>Es hora de contar una gran historia</span>

          <h2 className="font-serif" style={{
            fontSize: 'clamp(38px, 7vw, 90px)',
            margin: '0 0 28px', letterSpacing: '-0.025em',
            color: C.bg, lineHeight: 0.95,
          }}>
            En poquísimos<br />
            <em style={{ color: C.lavender }}>hechizos creo</em><br />
            como en el de la<br />
            conversación.
          </h2>

          <p style={{
            fontSize: 17, color: 'rgba(240,236,229,0.55)',
            margin: '0 auto 48px', maxWidth: 440, lineHeight: 1.65, fontWeight: 300,
          }}>
            Cuéntanos tu proyecto. Te escuchamos.
          </p>
          <a href="https://www.instagram.com/tobonstudio/" target="_blank" rel="noopener noreferrer" className="btn-cta">
            hola@tobonSTUDIO
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="section-pad" style={{
        padding: '36px 48px',
        borderTop: `1px solid ${C.border}`,
        background: C.bg,
      }}>
        <div className="footer-inner" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 20,
        }}>
          <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: 18, letterSpacing: '0.12em', color: C.ink }}>TOBÓN</span>
          <span style={{ fontSize: 11, color: C.muted, letterSpacing: '0.1em' }}>
            Experience Sprints · © 2026
          </span>
          <div style={{ display: 'flex', gap: 32 }}>
            <a href="#metodo" className="nav-link">Método</a>
            <a href="#programas" className="nav-link">Programas</a>
            <a href="#filosofia" className="nav-link">Filosofía</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
