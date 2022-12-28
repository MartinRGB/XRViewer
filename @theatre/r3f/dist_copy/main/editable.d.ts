import type { ComponentProps, ComponentType, RefAttributes } from 'react';
import React from 'react';
import type { $FixMe } from '../types';
declare const editable: (<T extends ComponentType<any> | keyof JSX.IntrinsicElements, U extends "line" | "mesh" | "lineSegments" | "lineLoop" | "points" | "group" | "perspectiveCamera" | "orthographicCamera" | "spotLight" | "pointLight" | "directionalLight" | "fog">(Component: T, type: T extends "primitive" ? null : U) => React.ForwardRefExoticComponent<React.PropsWithoutRef<Omit<ComponentProps<T>, "visible"> & {
    theatreKey: string;
    visible?: boolean | "editor" | undefined;
    additionalProps?: $FixMe;
    objRef?: $FixMe;
} & (T extends "primitive" ? {
    editableType: U;
} : {}) & RefAttributes<JSX.IntrinsicElements[U]>> & RefAttributes<unknown>>) & {
    line: React.ForwardRefExoticComponent<Pick<Omit<React.SVGProps<SVGLineElement>, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<React.SVGProps<SVGLineElement>>, "string" | "style" | "clipPath" | "filter" | "mask" | "path" | "points" | "color" | "children" | "x" | "y" | "z" | "rotate" | "scale" | "local" | "visible" | "key" | "type" | "id" | "name" | "offset" | "onEnded" | "opacity" | "version" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerCancel" | "onWheel" | "bias" | "radius" | "target" | "width" | "height" | "format" | "min" | "max" | "order" | "r" | "theatreKey" | "additionalProps" | "objRef" | "className" | "lang" | "media" | "method" | "role" | "tabIndex" | "crossOrigin" | "accentHeight" | "accumulate" | "additive" | "alignmentBaseline" | "allowReorder" | "alphabetic" | "amplitude" | "arabicForm" | "ascent" | "attributeName" | "attributeType" | "autoReverse" | "azimuth" | "baseFrequency" | "baselineShift" | "baseProfile" | "bbox" | "begin" | "by" | "calcMode" | "capHeight" | "clip" | "clipPathUnits" | "clipRule" | "colorInterpolation" | "colorInterpolationFilters" | "colorProfile" | "colorRendering" | "contentScriptType" | "contentStyleType" | "cursor" | "cx" | "cy" | "d" | "decelerate" | "descent" | "diffuseConstant" | "direction" | "display" | "divisor" | "dominantBaseline" | "dur" | "dx" | "dy" | "edgeMode" | "elevation" | "enableBackground" | "end" | "exponent" | "externalResourcesRequired" | "fill" | "fillOpacity" | "fillRule" | "filterRes" | "filterUnits" | "floodColor" | "floodOpacity" | "focusable" | "fontFamily" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "from" | "fx" | "fy" | "g1" | "g2" | "glyphName" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "glyphRef" | "gradientTransform" | "gradientUnits" | "hanging" | "horizAdvX" | "horizOriginX" | "href" | "ideographic" | "imageRendering" | "in2" | "in" | "intercept" | "k1" | "k2" | "k3" | "k4" | "k" | "kernelMatrix" | "kernelUnitLength" | "kerning" | "keyPoints" | "keySplines" | "keyTimes" | "lengthAdjust" | "letterSpacing" | "lightingColor" | "limitingConeAngle" | "markerEnd" | "markerHeight" | "markerMid" | "markerStart" | "markerUnits" | "markerWidth" | "maskContentUnits" | "maskUnits" | "mathematical" | "mode" | "numOctaves" | "operator" | "orient" | "orientation" | "origin" | "overflow" | "overlinePosition" | "overlineThickness" | "paintOrder" | "panose1" | "pathLength" | "patternContentUnits" | "patternTransform" | "patternUnits" | "pointerEvents" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "preserveAlpha" | "preserveAspectRatio" | "primitiveUnits" | "refX" | "refY" | "renderingIntent" | "repeatCount" | "repeatDur" | "requiredExtensions" | "requiredFeatures" | "restart" | "result" | "rx" | "ry" | "seed" | "shapeRendering" | "slope" | "spacing" | "specularConstant" | "specularExponent" | "speed" | "spreadMethod" | "startOffset" | "stdDeviation" | "stemh" | "stemv" | "stitchTiles" | "stopColor" | "stopOpacity" | "strikethroughPosition" | "strikethroughThickness" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "surfaceScale" | "systemLanguage" | "tableValues" | "targetX" | "targetY" | "textAnchor" | "textDecoration" | "textLength" | "textRendering" | "to" | "transform" | "u1" | "u2" | "underlinePosition" | "underlineThickness" | "unicode" | "unicodeBidi" | "unicodeRange" | "unitsPerEm" | "vAlphabetic" | "values" | "vectorEffect" | "vertAdvY" | "vertOriginX" | "vertOriginY" | "vHanging" | "vIdeographic" | "viewBox" | "viewTarget" | "visibility" | "vMathematical" | "widths" | "wordSpacing" | "writingMode" | "x1" | "x2" | "xChannelSelector" | "xHeight" | "xlinkActuate" | "xlinkArcrole" | "xlinkHref" | "xlinkRole" | "xlinkShow" | "xlinkTitle" | "xlinkType" | "xmlBase" | "xmlLang" | "xmlns" | "xmlnsXlink" | "xmlSpace" | "y1" | "y2" | "yChannelSelector" | "zoomAndPan" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenuCapture" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDownCapture" | "onPointerMoveCapture" | "onPointerUpCapture" | "onPointerCancelCapture" | "onPointerEnterCapture" | "onPointerLeaveCapture" | "onPointerOverCapture" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture">>;
    mesh: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").MeshProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").MeshProps>, "material" | "quaternion" | "children" | "scale" | "position" | "rotation" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "geometry" | "morphTargetInfluences" | "morphTargetDictionary" | "isMesh" | "updateMorphTargets" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "theatreKey" | "additionalProps" | "objRef">>;
    lineSegments: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").LineSegmentsProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").LineSegmentsProps>, "material" | "quaternion" | "children" | "scale" | "position" | "rotation" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "geometry" | "morphTargetInfluences" | "morphTargetDictionary" | "updateMorphTargets" | "isLineSegments" | "isLine" | "computeLineDistances" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "theatreKey" | "additionalProps" | "objRef">>;
    lineLoop: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").LineLoopProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").LineLoopProps>, "material" | "quaternion" | "children" | "scale" | "position" | "rotation" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "geometry" | "morphTargetInfluences" | "morphTargetDictionary" | "updateMorphTargets" | "isLine" | "computeLineDistances" | "isLineLoop" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "theatreKey" | "additionalProps" | "objRef">>;
    points: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").PointsProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").PointsProps>, "material" | "quaternion" | "children" | "scale" | "position" | "rotation" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "geometry" | "morphTargetInfluences" | "morphTargetDictionary" | "updateMorphTargets" | "isPoints" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "theatreKey" | "additionalProps" | "objRef">>;
    group: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").GroupProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").GroupProps>, "quaternion" | "children" | "scale" | "position" | "rotation" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "isGroup" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "theatreKey" | "additionalProps" | "objRef">>;
    perspectiveCamera: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").PerspectiveCameraProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").PerspectiveCameraProps>, "view" | "quaternion" | "children" | "scale" | "position" | "rotation" | "near" | "far" | "fov" | "zoom" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "matrixWorldInverse" | "projectionMatrix" | "projectionMatrixInverse" | "isCamera" | "isPerspectiveCamera" | "aspect" | "focus" | "filmGauge" | "filmOffset" | "setFocalLength" | "getFocalLength" | "getEffectiveFOV" | "getFilmWidth" | "getFilmHeight" | "setViewOffset" | "clearViewOffset" | "updateProjectionMatrix" | "setLens" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "theatreKey" | "additionalProps" | "objRef">>;
    orthographicCamera: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").OrthographicCameraProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").OrthographicCameraProps>, "view" | "quaternion" | "children" | "scale" | "position" | "rotation" | "near" | "far" | "zoom" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "matrixWorldInverse" | "projectionMatrix" | "projectionMatrixInverse" | "isCamera" | "setViewOffset" | "clearViewOffset" | "updateProjectionMatrix" | "isOrthographicCamera" | "left" | "right" | "top" | "bottom" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "theatreKey" | "additionalProps" | "objRef">>;
    spotLight: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").SpotLightProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").SpotLightProps>, "quaternion" | "color" | "children" | "scale" | "position" | "rotation" | "intensity" | "distance" | "decay" | "angle" | "penumbra" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "isLight" | "shadow" | "shadowCameraFov" | "shadowCameraLeft" | "shadowCameraRight" | "shadowCameraTop" | "shadowCameraBottom" | "shadowCameraNear" | "shadowCameraFar" | "shadowBias" | "shadowMapWidth" | "shadowMapHeight" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "target" | "power" | "isSpotLight" | "theatreKey" | "additionalProps" | "objRef">>;
    pointLight: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").PointLightProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").PointLightProps>, "quaternion" | "color" | "children" | "scale" | "position" | "rotation" | "intensity" | "distance" | "decay" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "isLight" | "shadow" | "shadowCameraFov" | "shadowCameraLeft" | "shadowCameraRight" | "shadowCameraTop" | "shadowCameraBottom" | "shadowCameraNear" | "shadowCameraFar" | "shadowBias" | "shadowMapWidth" | "shadowMapHeight" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "power" | "theatreKey" | "additionalProps" | "objRef">>;
    directionalLight: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").DirectionalLightProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").DirectionalLightProps>, "quaternion" | "color" | "children" | "scale" | "position" | "rotation" | "intensity" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "isLight" | "shadow" | "shadowCameraFov" | "shadowCameraLeft" | "shadowCameraRight" | "shadowCameraTop" | "shadowCameraBottom" | "shadowCameraNear" | "shadowCameraFar" | "shadowBias" | "shadowMapWidth" | "shadowMapHeight" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "target" | "isDirectionalLight" | "theatreKey" | "additionalProps" | "objRef">>;
    fog: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").FogProps, "visible"> & {
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
    } & RefAttributes<import("@react-three/fiber").FogProps>, "color" | "children" | "near" | "far" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "name" | "toJSON" | "clone" | "isFog" | "theatreKey" | "additionalProps" | "objRef">>;
} & {
    primitive: React.ForwardRefExoticComponent<Pick<{
        object: any;
        theatreKey: string;
        visible?: boolean | "editor" | undefined;
        additionalProps?: $FixMe;
        objRef?: $FixMe;
        editableType: keyof JSX.IntrinsicElements;
    } & RefAttributes<import("@react-three/fiber").PrimitiveProps>, "object" | "visible" | "key" | "theatreKey" | "additionalProps" | "objRef" | "editableType"> & {
        [props: string]: any;
    }>;
};
export default editable;
//# sourceMappingURL=editable.d.ts.map