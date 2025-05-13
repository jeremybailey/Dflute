import {
    bootstrapCameraKit, 
    createMediaStreamSource, 
    Transform2D,
    } from '@snap/camera-kit'

    (async function(){
    var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNjY0NzQ4ODkzLCJzdWIiOiJjYmM3NTUxOS1hYTAzLTRiZDMtOTIzMi04NjA3ZDU5YzE3Zjl-UFJPRFVDVElPTn4xMmFhNjZkZC0zZjdjLTQ4ZDgtYTc2NC1kMjljYWRmYmEyNGYifQ.jADIZpq3Lr9T_7dMXYjU-HG9Z40KiiL7cG4Dgp862hA' })

    const session = await cameraKit.createSession()
    document.getElementById ('canvas').replaceWith (session.output.live)

    const { lenses } = await cameraKit.lensRepository.loadLensGroups (['eb2e1d23-be92-496c-884c-b14a0ac7ef74'])

    session.applyLens (lenses[0])
    let mediaStream = await navigator. mediaDevices.getUserMedia ({ video: true });

    const source = createMediaStreamSource(mediaStream, {
    transform: Transform2D.MirrorX, 
    cameraType: 'front'
    })

    await session.setSource(source)

    session.source.setRenderSize (window.innerWidth, window.innerHeight)

    session. play ()
    })();