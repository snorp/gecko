#ifndef GFX_VR_GVR_API_H
#define GFX_VR_GVR_API_H
namespace mozilla {
namespace gfx {

void SetGVRPresentingContext(void* aGVRPresentingContext);
void CleanupGVRNonPresentingContext();
void SetGVRPaused(const bool aPaused);

} // namespace gfx
} // namespace mozilla
#endif // GFX_VR_GVR_API_H
