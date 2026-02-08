'use client';

import { MusicToggleButton } from './MusicToggleButton';
import { SocialButtons } from './SocialButtons';
import { SquigglyArrow } from './SquigglyArrow';

export function HeaderControls() {
    return (
        <>
            {/* Left side - Music Button with diagonal Arrow pointing to it */}
            <div className="header-left-controls">
                <MusicToggleButton />
                <div className="arrow-wrapper">
                    <SquigglyArrow
                        width={70}
                        height={70}
                        strokeWidth={3.5}
                        className="hint-arrow-diagonal"
                    />
                </div>
            </div>

            {/* Right side - Social buttons only */}
            <div className="header-right-controls">
                <SocialButtons />
            </div>
        </>
    );
}

export default HeaderControls;
