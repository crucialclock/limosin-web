import BrandShape from "./BrandShape";

export default function PageBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div className="brand-bg-grid absolute inset-0" aria-hidden="true" />
            <div className="absolute left-[-12rem] top-[7rem] h-56 w-[36rem] -rotate-12 border-y border-(--color-border-soft) bg-white/18 sm:left-[-8rem] sm:top-[8rem] lg:left-[-4rem] lg:top-[9rem]" aria-hidden="true" />
            <div className="absolute right-[-14rem] top-[42%] h-64 w-[42rem] rotate-12 border-y border-(--color-accent)/24 bg-(--color-accent-soft)" aria-hidden="true" />

            <BrandShape type="square" className="left-[-4.5rem] top-24 h-34 w-34 rotate-12 sm:left-[-3rem] sm:h-44 sm:w-44 lg:left-[4vw] lg:top-30" color="rgba(21,21,21,.07)" />
            <BrandShape type="circle" className="right-[-6rem] top-14 h-48 w-48 sm:right-[-4rem] sm:h-64 sm:w-64 lg:right-[8vw] lg:top-20" color="rgba(255,214,44,.18)" />
            <BrandShape type="diamond" className="bottom-28 left-[7%] h-20 w-20 sm:h-28 sm:w-28 lg:left-[13%]" color="rgba(255,214,44,.2)" />
            <BrandShape type="triangle" className="bottom-[-5rem] right-[9%]" color="rgba(21,21,21,.06)" size="6.5rem" />
            <BrandShape type="square" className="bottom-[12%] right-[-2.25rem] h-24 w-24 -rotate-6 sm:h-32 sm:w-32 lg:right-[3vw]" color="rgba(21,21,21,.075)" />
        </div>
    );
}
