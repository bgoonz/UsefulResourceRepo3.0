/*
 * Copyright (c) 2011, 2013, Oracle and/or its affiliates. All rights reserved.
 * ORACLE PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

package com.sun.javafx.runtime;

/**
 * The VersionInfo class contains strings that describe the implementation
 * and specification version of the javafx pacakges.  These strings
 * are made available as properties obtained from the System Properties class.
 *
 * <p>
 * This class serves 3 purposes:
 *
 * 1. It creates the JavaFX version properties to be added into the Java 
 * System Properties at the loading of the JavaFX Toolkit. The JavaFX properties
 * are javafx.version and javafx.runtime.version. Their formats follow the 
 * specification of java.version and java.runtime.version respectively.
 * See http://java.sun.com/j2se/versioning_naming.html for details.
 * 
 * For example, a beta release build of JavaFX 2.0 build number 26 will contain 
 * the following properties:
 * 
 * javafx.version = 2.0.0-beta
 * javafx.runtime.version = 2.0.0-beta-b26
 * 
 * 2. It provides methods to access Hudson build information and timestamp.
 * These methods can be used to uniquely identify a particular build
 * for internal test and deployment:
 *
 * The method getHudsonJobName() will returns the name of the hudson job.
 * For example, a master build will have the name as "presidio", and a
 * graphics-scrum will have the name as "presidio-graphics" and so for.
 * An empty string is returned if the build isn't build on Hudson, such as a
 * local build on a developer machine.
 *
 * The method getHudsonBuildNumber() will returns the number of the hudson job
 * on a particular build scrum. The job number is sequentially incremented for
 * each build job.
 * For example, a master build job number of 25 was built before master job
 * number 26.
 * A string of zeros is returned if the build isn't build on Hudson, such as a
 * local build on a developer machine.
 *
 * The method getBuildTimestamp() will returns the timestamp of the build.
 *
 * 3. To uniquely identify a build that isn't generated on Hudson, such as a
 * local build on a developer machine. It substitutes the build number tag of
 * the javafx.runtime.version string with the build timestamp.
 * For example, a beta build of JavaFx 2.0 on a developer machine will look
 * something like the following:
 *
 * javafx.version = 2.0.0-beta
 * javafx.runtime.version = 2.0.0-beta (2011/04/28 22:08:04)
 *
 * 
 * <p>
 * The tags of the form @STRING@ are populated by ant when the project is built
 *
 * @see System#getProperties
 */
public class VersionInfo {

    /**
     * Build Timestamp.
     */
    private static final String BUILD_TIMESTAMP = "Fri Jul 25 13:00:57 PDT 2014";

    /**
     * Hudson Job Name.
     */
    private static final String HUDSON_JOB_NAME = "8u20";

    /**
     * Hudson Build Number.
     */
    private static final String HUDSON_BUILD_NUMBER = "53";

    /**
     * Promoted build number used as part of the runtime version string.
     */
    private static final String PROMOTED_BUILD_NUMBER = "26";

    /**
     * Product Name. Currently unused.
     */
    private static final String PRODUCT_NAME = "Java(TM)";

    /**
     * Raw Version number string. (without milestone tag)
     */
    private static final String RAW_VERSION = "8.0.20";

    /**
     * Release Milestone.
     */
    private static final String RELEASE_MILESTONE = "fcs";

    /**
     * Release Name. Currently unused.
     */
    private static final String RELEASE_NAME = "8u20";

    /**
     * The composite version string. This is composed in the static
     * initializer for this class.
     */
    private static final String VERSION;

    /**
     * The composite version string include build number.
     * This is composed in the static initializer for this class.
     */
    private static final String RUNTIME_VERSION;

    // The static initializer composes the VERSION and RUNTIME_VERSION strings
    static {
        String tmpVersion = RAW_VERSION;

        // Construct the VERSION string adding milestone information,
        // such as beta, if present.
        // Note: RELEASE_MILESTONE is expected to be empty if it is set to "fcs"
        if (getReleaseMilestone().length() > 0) {
            tmpVersion += "-" + RELEASE_MILESTONE;
        }
        VERSION = tmpVersion;

        // Append the RUNTIME_VERSION string that follow the VERSION string
        if (getHudsonJobName().length() > 0) {
            tmpVersion += "-b" + PROMOTED_BUILD_NUMBER;
        } else {
            // Non hudson (developer) build
            tmpVersion += " (" + BUILD_TIMESTAMP + ")";
        }
        RUNTIME_VERSION = tmpVersion;
    }

    /**
     * Setup the System properties with JavaFX API version information.
     * The format of the value strings of javafx.version and javafx.runtime.version
     * will follow the same pattern as java.version and java.runtime.version
     * respectively.
     * See http://java.sun.com/j2se/versioning_naming.html for details.
     */
    public static synchronized void setupSystemProperties() {
        if (System.getProperty("javafx.version") == null) {
            System.setProperty("javafx.version", getVersion());
            System.setProperty("javafx.runtime.version", getRuntimeVersion());
        }
    }

    /**
     * Returns the build timestamp of the JavaFx API.
     * @return the build timestamp of the JavaFX API
     */
    public static String getBuildTimestamp() {
        return BUILD_TIMESTAMP;
    }

    /**
     * Returns the Hudson job name, an empty string is return if HUNDSON_JOB_NAME
     * is set to "not_hudson". 
     * @return the Hudson job name
     */
    public static String getHudsonJobName() {
        if (HUDSON_JOB_NAME.equals("not_hudson")) {
            return "";
        }
        return HUDSON_JOB_NAME;
    }

    /**
     * Returns the Hudson build number.
     * @return the Hudson build number
     */
    public static String getHudsonBuildNumber() {
        return HUDSON_BUILD_NUMBER;
    }

    /**
     * Returns the release milestone string, an empty string is return if
     * RELEASE_MILESTONE is set to "fcs".
     * @return the release milestone string
     */
    public static String getReleaseMilestone() {
        if (RELEASE_MILESTONE.equals("fcs")) {
            return "";
        }
        return RELEASE_MILESTONE;
    }

    /**
     * Returns the version string.
     * @return the version string
     */
    public static String getVersion() {
        return VERSION;
    }

    /**
     * Returns the runtime version string.
     * @return the runtime version string
     */
    public static String getRuntimeVersion() {
        return RUNTIME_VERSION;
    }
}
