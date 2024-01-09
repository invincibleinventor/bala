'use client';

import { createRef, CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

type tagSphereProps = {
  texts: (string | ReactNode)[];
  radius?: number;
  maxSpeed: number;
  initialSpeed: number;
  initialDirection: 135;
  keepRollingAfterMouseOut: boolean;
  className?: string;
  style?: CSSProperties;
  useContainerInlineStyles: boolean;
  fullWidth: boolean;
  fullHeight: boolean;
};

const defaultStyles = {
  getContainer: (radius: number, fullWidth: boolean, fullHeight: boolean) =>
    ({
      position: 'relative',
      width: fullWidth ? '100%' : `${2 * radius}px`,
      maxWidth: '100%',
      minHeight: `${2 * radius}px`,
      height: fullHeight ? '100%' : `${2 * radius}px`,
      touchAction: 'none',
    }) as CSSProperties,
};

const computeInitialPosition = (index: number, textsLength: number, size: number) => {
  const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
  const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2,
  };
};

const updateItemPosition = (item: any, sc: number[], depth: number) => {
  const newItem = { ...item, scale: '' };
  const rx1 = item.x;
  const ry1 = item.y * sc[1] + item.z * -sc[0];
  const rz1 = item.y * sc[0] + item.z * sc[1];

  const rx2 = rx1 * sc[3] + rz1 * sc[2];
  const ry2 = ry1;
  const rz2 = rz1 * sc[3] - rx1 * sc[2];

  const per = (2 * depth) / (2 * depth + rz2); // todo
  newItem.x = rx2;
  newItem.y = ry2;
  newItem.z = rz2;

  if (newItem.x === item.x && newItem.y === item.y && newItem.z === item.z) {
    return item;
  }

  newItem.scale = per.toFixed(3);
  let alpha: number = per * per - 0.25;
  alpha = parseFloat((alpha > 1 ? 1 : alpha).toFixed(3));

  const itemEl = newItem.ref.current;
  // @ts-ignore
  const left = (newItem.x - itemEl.offsetWidth / 2).toFixed(2);
  // @ts-ignore
  const top = (newItem.y - itemEl.offsetHeight / 2).toFixed(2);
  const transform = `translate3d(${left}px, ${top}px, 0) scale(${newItem.scale})`;

  // @ts-ignore
  itemEl.style.WebkitTransform = transform;
  // @ts-ignore
  itemEl.style.MozTransform = transform;
  // @ts-ignore
  itemEl.style.OTransform = transform;
  // @ts-ignore
  itemEl.style.transform = transform;
  // @ts-ignore
  itemEl.style.filter = `grayscale(${(alpha - 1) * -8}) blur(${
    (alpha - 1) * -5 > 1 ? Math.floor((alpha - 1) * -8) : 0
  }px)`;
  itemEl.style.zIndex = Math.floor(alpha * 1000);
  // @ts-ignore
  itemEl.style.opacity = alpha;

  return newItem;
};

const createItem = (
  text: string | ReactNode,
  index: number,
  textsLength: number,
  size: number,
  itemRef: any,
) => {
  const transformOrigin = '50% 50%';
  const transform = 'translate3d(-50%, -50%, 0) scale(1)';
  const itemStyles = {
    willChange: 'transform, opacity, filter',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: index + 1,
    filter: 'alpha(opacity=0)',
    opacity: 0,
    WebkitTransformOrigin: transformOrigin,
    MozTransformOrigin: transformOrigin,
    OTransformOrigin: transformOrigin,
    transformOrigin: transformOrigin,
    WebkitTransform: transform,
    MozTransform: transform,
    OTransform: transform,
    transform: transform,
  } as CSSProperties;
  // @ts-ignore
  const itemEl = (
    <span ref={itemRef} key={index} style={itemStyles}>
      {text}
    </span>
  );

  return {
    ref: itemRef,
    el: itemEl,
    ...computeInitialPosition(index, textsLength, size),
  };
};

const defaultState: tagSphereProps = {
  texts: [
    <img width={35} key={1} src={'https://cdn.svgporn.com/logos/html-5.svg'} alt={'HTML5'} />,
    <img width={35} key={2} src={'https://cdn.svgporn.com/logos/python.svg'} alt={'Python'} />,
    <img width={35} key={3} src={'https://cdn.svgporn.com/logos/react.svg'} alt={'React'} />,
    <img
      width={35}
      key={4}
      src={'https://cdn.svgporn.com/logos/tailwindcss-icon.svg'}
      alt={'TailwindCSS'}
    />,
    <img key={5} width={35} src={'https://cdn.svgporn.com/logos/figma.svg'} alt={'Figma'} />,
    <img key={6} width={35} src={'https://cdn.svgporn.com/logos/vim.svg'} alt={'VIM'} />,
    <img width={35} key={7} src={'https://cdn.svgporn.com/logos/linux-tux.svg'} alt={'Linux'} />,
    <img
      width={35}
      key={8}
      src={'https://cdn.svgporn.com/logos/javascript.svg'}
      alt={'Javascript'}
    />,
    <img width={35} key={9} src={'https://cdn.svgporn.com/logos/adobe-xd.svg'} alt={'Adobe XD'} />,
    <img
      width={35}
      key={10}
      src={'https://cdn.svgporn.com/logos/visual-studio-code.svg'}
      alt={'VSCode'}
    />,
    <img width={35} key={11} src={'https://cdn.svgporn.com/logos/qwik-icon.svg'} alt={'QwikJS'} />,
    <img
      width={35}
      key={12}
      src={'https://cdn.svgporn.com/logos/svelte-icon.svg'}
      alt={'Svelte'}
    />,
    <img width={35} key={13} src={'https://cdn.svgporn.com/logos/firebase.svg'} alt={'Firebase'} />,
    <img
      width={35}
      key={14}
      src={'https://cdn.svgporn.com/logos/nodejs-icon.svg'}
      alt={'NodeJS'}
    />,
    <img
      width={35}
      key={15}
      src={'https://cdn.svgporn.com/logos/supabase-icon.svg'}
      alt={'Supabase'}
    />,
    <img width={35} key={16} src={'https://cdn.svgporn.com/logos/java.svg'} alt={'Java'} />,
    <img
      width={35}
      key={17}
      src={'https://cdn.svgporn.com/logos/nextjs-icon.svg'}
      alt={'NextJS'}
    />,
    <img
      width={35}
      key={18}
      src={'https://cdn.svgporn.com/logos/mongodb-icon.svg'}
      alt={'MongoDB'}
    />,
    <img width={35} key={19} src={'https://cdn.svgporn.com/logos/git-icon.svg'} alt={'GIT'} />,
    <img width={35} key={20} src={'https://cdn.svgporn.com/logos/lua.svg'} alt={'Lua'} />,
  ],
  maxSpeed: 1,
  initialSpeed: 1,
  initialDirection: 135,
  keepRollingAfterMouseOut: true,
  useContainerInlineStyles: true,
  fullWidth: false,
  fullHeight: false,
};

export default function TagSphere(props: any) {
  const width = window.innerWidth;

  const {
    maxSpeed,
    initialSpeed,
    texts,
    initialDirection,
    keepRollingAfterMouseOut,
    fullHeight,
    fullWidth,
    style,
    useContainerInlineStyles,
  }: tagSphereProps = { ...defaultState, ...props };

  let radius = props.radius;
  console.log(radius);
  if (!radius) {
    let a = 1;
    console.log(width, width > 1000);
    if (width > 1000) {
      a = 15;
      radius = texts.length * a;
    } else {
      a = 8;
      radius = texts.length * a;
    }
    console.log(a);
  }

  console.log(radius);
  const depth = 2 * radius;
  const size = 1.5 * radius;
  const itemHooks = texts.map(() => createRef());
  const [items, setItems]: [any[], any] = useState([]);

  useEffect(() => {
    console.log('server');

    setItems(() =>
      texts.map((text, index) => createItem(text, index, texts.length, size, itemHooks[index])),
    );
  }, [texts]);

  const containerRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);
  const [lessSpeed, setLessSpeed] = useState(maxSpeed);
  const [active, setActive] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: any) => {
    // @ts-ignore
    const rect = containerRef.current.getBoundingClientRect();

    setMouseX(() => (e.clientX - (rect.left + rect.width / 2)) / 5);
    setMouseY(() => (e.clientY - (rect.top + rect.height / 2)) / 5);
  };

  const checkTouchCoordinates = (e: any) => {
    // @ts-ignore
    const rect = containerRef.current.getBoundingClientRect();
    const touchX = e.targetTouches[0].clientX;
    const touchY = e.targetTouches[0].clientY;

    if (touchX > rect.left && touchX < rect.right && touchY < rect.bottom && touchY > rect.top) {
      return true;
    }

    return false;
  };

  const next = () => {
    setItems((items: any) => {
      if (lessSpeed == 0) return items;

      let a, b;
      if (!keepRollingAfterMouseOut && !active && !firstRender) {
        setLessSpeed((lessSpeedCurrent) => {
          const lessConstant = lessSpeed * (maxSpeed / 200);

          return lessSpeedCurrent - lessConstant > 0.01 ? lessSpeedCurrent - lessConstant : 0;
        });

        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * lessSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * lessSpeed;

        /*setMouseX(
                                                                                                                Math.abs(mouseX - mouseX0) < 1 ? mouseX0 : (mouseX + mouseX0) / 2,
                                                                                                              );
                                                                                                              setMouseY(
                                                                                                                Math.abs(mouseY - mouseY0) < 1 ? mouseY0 : (mouseY + mouseY0) / 2,
                                                                                                              );*/
      } else if (!active && !firstRender && keepRollingAfterMouseOut) {
        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * (maxSpeed * 0.5);
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * (maxSpeed * 0.5);
      } else {
        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeed;
      }

      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return items; // pause

      // calculate offset
      const l = Math.PI / 180;
      const sc = [Math.sin(a * l), Math.cos(a * l), Math.sin(b * l), Math.cos(b * l)];

      return items.map((item: any) => updateItemPosition(item, sc, depth));
    });
  };

  const init = () => {
    setActive(false);
    const mouseX0 = initialSpeed * Math.sin(initialDirection * (Math.PI / 180));
    const mouseY0 = -initialSpeed * Math.cos(initialDirection * (Math.PI / 180));

    setMouseX(() => mouseX0);
    setMouseY(() => mouseY0);

    next();
  };

  useEffect(() => {
    init();
    setItems((items: any) => [...items]);
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(next);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, lessSpeed, active, items, props.radius]);

  return (
    <div
      className={props.className}
      ref={containerRef}
      onMouseOver={() => {
        setActive(() => true);
        setFirstRender(() => false);
        setLessSpeed(() => maxSpeed);
      }}
      onMouseOut={() => {
        setActive(() => false);
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={() => {
        setActive(true);
        setLessSpeed(() => maxSpeed);
        setFirstRender(() => false);
      }}
      onTouchMove={(e) => {
        if (checkTouchCoordinates(e)) {
          handleMouseMove(e.targetTouches[0]);
        } else {
          setActive(false);
        }
      }}
      style={
        useContainerInlineStyles
          ? style || defaultStyles.getContainer(radius, fullWidth, fullHeight)
          : undefined
      }
    >
      {items.map((item) => item.el)}
    </div>
  );
}
