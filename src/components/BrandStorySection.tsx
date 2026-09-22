import React, { useState } from 'react';
import { Smartphone, Tv, Trophy, Users, CheckCircle2 } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const touchpoints = [
    { title: 'Live Match Broadcasts', icon: Tv, desc: 'Fans watching live action across TV and streaming channels.' },
    { title: 'Social & Creator Feeds', icon: Smartphone, desc: 'Highlights, memes, and reaction content from sports creators.' },
    { title: 'Stadium & Arena Experiences', icon: Trophy, desc: 'On-ground brand presence, signage, and VIP hospitality.' },
    { title: 'Fantasy & Digital Platforms', icon: Users, desc: 'Interactive fan apps, score trackers, and stats platforms.' },
  ];

  return (
    <section id="brand-story" className="section-padding" style={{ background: '#050524', borderBottom: '1px solid var(--border-color)' }}>
      <div className="site-container">
        <div className="eyebrow">THE BRAND STORY</div>
        <h2 className="heading-display">ONE FAN. A DOZEN TOUCHPOINTS.</h2>
        <p className="body-large" style={{ marginBottom: '3.5rem' }}>
          Sport isn't one door. Today's sports fans live across fragmented platforms, stadium seats, creator feeds, and digital score trackers.
        </p>

        {/* Touchpoint Connection Visualizer */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {touchpoints.map((tp, idx) => (
            <div
              key={tp.title}
              onClick={() => setActiveStep(idx)}
              style={{
                background: activeStep === idx ? 'rgba(51, 67, 255, 0.15)' : 'var(--bg-card)',
                border: activeStep === idx ? '1px solid var(--blue-orchid)' : '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '1.75rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <tp.icon size={26} color={activeStep === idx ? 'var(--electric-green)' : 'var(--blue-orchid-light)'} />
                <span style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>0{idx + 1}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>{tp.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{tp.desc}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem Connection Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--pitch-green) 0%, #03241d 100%)',
            border: '1px solid rgba(165, 227, 95, 0.3)',
            borderRadius: '20px',
            padding: '2.5rem 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <CheckCircle2 size={18} color="var(--electric-green)" />
              <span style={{ fontFamily: 'var(--font-numeral)', fontSize: '0.8rem', color: 'var(--electric-green)', fontWeight: 700 }}>THE LEVELUP ADVANTAGE</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: '#fff' }}>
              Connected into One Seamless Ecosystem
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#b2d9cf', marginTop: '0.35rem' }}>
              LevelUp bridges rights, platforms, creators, athletes, and production — allowing brands to engage fans wherever they consume sport.
            </p>
          </div>

          <div style={{ fontFamily: 'var(--font-numeral)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--electric-green-light)', background: 'rgba(0,0,0,0.3)', padding: '0.85rem 1.5rem', borderRadius: '12px', border: '1px solid rgba(165,227,95,0.2)' }}>
            One Partner. All Solutions.
          </div>
        </div>
      </div>
    </section>
  );
};

