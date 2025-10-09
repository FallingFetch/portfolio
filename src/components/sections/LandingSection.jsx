import { useState, useEffect, useMemo, useCallback } from 'react';

const HeroSection = () => {
  {/* Word Rotation Data */}
  const words = useMemo(() => [
    'designer', 'creative', 'developer', 'interactive specialist', 
    'visual storyteller', 'game designer', 'illustrator', 'animator', 
    'problem solver', 'digital innovator', 'multi-disciplinary artist', '3D artist'
  ], []);

  {/* Article Helper Function */}
  const getFullText = useCallback((word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const article = vowels.includes(word.charAt(0).toLowerCase()) ? 'an ' : 'a ';
    return article + word;
  }, []);

  {/* Typing Animation State */}
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  {/* Typing Animation Effect */}
  useEffect(() => {
    if (!words.length || currentWordIndex >= words.length) return;
    
    const currentWord = words[currentWordIndex];
    if (!currentWord) return;
    
    const fullText = getFullText(currentWord);
    let timeoutId;
    
    if (isTyping) {
      if (displayText.length < fullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 50);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentWordIndex(prev => (prev + 1) % words.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayText, isTyping, currentWordIndex, words, getFullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-portfolio-hero"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-left mb-12 lg:mb-16">
          <div className="space-y-1">
            <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
              <span className="text-foreground">
                Welcome, I'm Fetch!
              </span>
            </h1>

            {/* Animated Text Container */}            
            <div className="h-[70px] sm:h-[80px] lg:h-[100px] xl:h-[110px] 2xl:h-[120px] flex items-start justify-start overflow-hidden">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-none"
              >
                I'm {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div className="mb-12 lg:mb-16">
          <div className="relative w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[896px] max-w-[896px] h-80 sm:h-96 lg:h-96 xl:h-[432px] mx-auto lg:mx-0">
            <div className="w-full h-full rounded-portfolio flex items-center justify-center placeholder-default">
              <div className="text-center">
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                  Lottie Animation
                </p>
                <p className="text-sm sm:text-base lg:text-lg mt-1 text-muted-foreground">
                  Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;