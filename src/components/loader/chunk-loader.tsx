export default function QuantumLoader({ message }: { message: string }) {
    const isMobile = window.innerWidth < 768;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            overflow: 'hidden',
            padding: isMobile ? '20px' : '0'
        }}>
            {/* Floating Particles Background */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 0
            }}>
                {[...Array(isMobile ? 20 : 40)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        width: `${Math.random() * 8 + 2}px`,
                        height: `${Math.random() * 8 + 2}px`,
                        background: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
                        borderRadius: '50%',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 15 + 5}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                        filter: 'blur(1px)'
                    }}></div>
                ))}
            </div>

            {/* Main Loader Container */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile ? '30px' : '50px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                {/* Glowing Orb */}
                <div style={{
                    position: 'relative',
                    width: isMobile ? '120px' : '180px',
                    height: isMobile ? '120px' : '180px',
                    marginBottom: isMobile ? '20px' : '30px'
                }}>
                    {/* Outer Glow */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at center, rgba(100, 200, 255, 0.3) 0%, transparent 70%)',
                        animation: 'pulseGlow 3s ease-in-out infinite alternate'
                    }}></div>

                    {/* Inner Orb */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, #4facfe 0%, #00f2fe 100%)',
                        boxShadow: '0 0 30px rgba(79, 172, 254, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'float 6s ease-in-out infinite'
                    }}>
                        {/* Logo or Icon */}
                        <img
                            src="/LOGO.png"
                            alt="Loading"
                            style={{
                                width: isMobile ? '50px' : '80px',
                                height: isMobile ? '50px' : '80px',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                                animation: 'spin 8s linear infinite'
                            }}
                        />
                    </div>

                    {/* Floating Particles */}
                    {[...Array(isMobile ? 6 : 10)].map((_, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            width: isMobile ? '6px' : '10px',
                            height: isMobile ? '6px' : '10px',
                            borderRadius: '50%',
                            background: `hsl(${i * 36}, 100%, 70%)`,
                            filter: 'blur(1px)',
                            animation: `orbit ${4 + Math.random() * 3}s linear infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                            top: '50%',
                            left: '50%',
                            marginTop: isMobile ? '-3px' : '-5px',
                            marginLeft: isMobile ? '-3px' : '-5px',
                            transformOrigin: `${isMobile ? 70 : 100}px center`,
                            boxShadow: '0 0 10px currentColor'
                        }}></div>
                    ))}
                </div>

                {/* Progress Bar */}
                <div style={{
                    width: isMobile ? '200px' : '300px',
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    marginBottom: isMobile ? '15px' : '25px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '100%',
                        width: '0%',
                        background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                        borderRadius: '2px',
                        animation: 'progress 2s ease-in-out infinite alternate'
                    }}></div>
                </div>

                {/* Loading Text */}
                <div style={{
                    fontSize: isMobile ? '16px' : '20px',
                    fontWeight: 500,
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    marginBottom: '10px'
                }}>
                    {message}
                </div>

                {/* Percentage Counter */}
                <div style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.8)',
                    animation: 'countUp 4s linear infinite'
                }}>
                    <span className="percentage">0</span>%
                </div>
            </div>

            {/* CSS Animations */}
            <style>
                {`
        @keyframes pulseGlow {
          0% { transform: scale(0.9); opacity: 0.6; }
          100% { transform: scale(1.1); opacity: 0.9; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(${isMobile ? '-10px' : '-20px'}); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(${isMobile ? '60px' : '90px'}) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(${isMobile ? '60px' : '90px'}) rotate(-360deg); }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes countUp {
          0% { opacity: 0; }
          10% { opacity: 1; }
          100% { 
            opacity: 1;
            content: '100';
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0) translateX(10px); }
          75% { transform: translateY(-5px) translateX(5px); }
        }
        
        .percentage::after {
          content: '0';
          animation: countUp 4s steps(100) infinite;
        }
        `}
            </style>
        </div>
    );
}