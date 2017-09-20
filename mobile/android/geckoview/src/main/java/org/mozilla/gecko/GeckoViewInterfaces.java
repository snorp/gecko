package org.mozilla.gecko;

public final class GeckoViewInterfaces {

     public interface GVRDelegate {
         long createGVRNonPresentingContext();
         void destroyGVRNonPresentingContext();
         boolean enableVRMode();
         void disableVRMode();
     }
}
