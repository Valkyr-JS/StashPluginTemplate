type Maybe<T> = T | null
type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** An RFC3339 timestamp */
  Time: any
  /**
   * Timestamp is a point in time. It is always output as RFC3339-compatible time points.
   * It can be input as a RFC3339 string, or as "<4h" for "4 hours in the past" or ">5m"
   * for "5 minutes in the future"
   */
  Timestamp: any
  /** A String -> Any map */
  Map: any
  /** A String -> Boolean map */
  BoolMap: any
  /** A plugin ID -> Map (String -> Any map) map */
  PluginConfigMap: any
  Any: any
  Int64: any
  /** A multipart file upload */
  Upload: any
}

/** The query root for this schema */
type Query = {
  __typename?: "Query"
  findSavedFilter?: Maybe<SavedFilter>
  findSavedFilters: Array<SavedFilter>
  findDefaultFilter?: Maybe<SavedFilter>
  /** Find a scene by ID or Checksum */
  findScene?: Maybe<Scene>
  findSceneByHash?: Maybe<Scene>
  /** A function which queries Scene objects */
  findScenes: FindScenesResultType
  findScenesByPathRegex: FindScenesResultType
  /**
   * Returns any groups of scenes that are perceptual duplicates within the queried distance
   * and the difference between their duration is smaller than durationDiff
   */
  findDuplicateScenes: Array<Array<Scene>>
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>
  parseSceneFilenames: SceneParserResultType
  /** A function which queries SceneMarker objects */
  findSceneMarkers: FindSceneMarkersResultType
  findImage?: Maybe<Image>
  /** A function which queries Scene objects */
  findImages: FindImagesResultType
  /** Find a performer by ID */
  findPerformer?: Maybe<Performer>
  /** A function which queries Performer objects */
  findPerformers: FindPerformersResultType
  /** Find a studio by ID */
  findStudio?: Maybe<Studio>
  /** A function which queries Studio objects */
  findStudios: FindStudiosResultType
  /** Find a movie by ID */
  findMovie?: Maybe<Movie>
  /** A function which queries Movie objects */
  findMovies: FindMoviesResultType
  findGallery?: Maybe<Gallery>
  findGalleries: FindGalleriesResultType
  findTag?: Maybe<Tag>
  findTags: FindTagsResultType
  /** Retrieve random scene markers for the wall */
  markerWall: Array<SceneMarker>
  /** Retrieve random scenes for the wall */
  sceneWall: Array<Scene>
  /** Get marker strings */
  markerStrings: Array<Maybe<MarkerStringsResultType>>
  /** Get stats */
  stats: StatsResultType
  /** Organize scene markers by tag for a given scene ID */
  sceneMarkerTags: Array<SceneMarkerTag>
  logs: Array<LogEntry>
  /** List available scrapers */
  listScrapers: Array<Scraper>
  /** Scrape for a single scene */
  scrapeSingleScene: Array<ScrapedScene>
  /** Scrape for multiple scenes */
  scrapeMultiScenes: Array<Array<ScrapedScene>>
  /** Scrape for a single studio */
  scrapeSingleStudio: Array<ScrapedStudio>
  /** Scrape for a single performer */
  scrapeSinglePerformer: Array<ScrapedPerformer>
  /** Scrape for multiple performers */
  scrapeMultiPerformers: Array<Array<ScrapedPerformer>>
  /** Scrape for a single gallery */
  scrapeSingleGallery: Array<ScrapedGallery>
  /** Scrape for a single movie */
  scrapeSingleMovie: Array<ScrapedMovie>
  /** Scrapes content based on a URL */
  scrapeURL?: Maybe<ScrapedContent>
  /** Scrapes a complete performer record based on a URL */
  scrapePerformerURL?: Maybe<ScrapedPerformer>
  /** Scrapes a complete scene record based on a URL */
  scrapeSceneURL?: Maybe<ScrapedScene>
  /** Scrapes a complete gallery record based on a URL */
  scrapeGalleryURL?: Maybe<ScrapedGallery>
  /** Scrapes a complete movie record based on a URL */
  scrapeMovieURL?: Maybe<ScrapedMovie>
  /** List loaded plugins */
  plugins?: Maybe<Array<Plugin>>
  /** List available plugin operations */
  pluginTasks?: Maybe<Array<PluginTask>>
  /** List installed packages */
  installedPackages: Array<Package>
  /** List available packages */
  availablePackages: Array<Package>
  /** Returns the current, complete configuration */
  configuration: ConfigResult
  /** Returns an array of paths for the given path */
  directory: Directory
  validateStashBoxCredentials: StashBoxValidationResult
  systemStatus: SystemStatus
  jobQueue?: Maybe<Array<Job>>
  findJob?: Maybe<Job>
  dlnaStatus: DlnaStatus
  /** @deprecated Use findScenes instead */
  allScenes: Array<Scene>
  /** @deprecated Use findSceneMarkers instead */
  allSceneMarkers: Array<SceneMarker>
  /** @deprecated Use findImages instead */
  allImages: Array<Image>
  /** @deprecated Use findGalleries instead */
  allGalleries: Array<Gallery>
  allPerformers: Array<Performer>
  /** @deprecated Use findTags instead */
  allTags: Array<Tag>
  /** @deprecated Use findStudios instead */
  allStudios: Array<Studio>
  /** @deprecated Use findMovies instead */
  allMovies: Array<Movie>
  version: Version
  latestversion: LatestVersion
}

/** The query root for this schema */
type QueryFindSavedFilterArgs = {
  id: Scalars["ID"]
}

/** The query root for this schema */
type QueryFindSavedFiltersArgs = {
  mode?: Maybe<FilterMode>
}

/** The query root for this schema */
type QueryFindDefaultFilterArgs = {
  mode: FilterMode
}

/** The query root for this schema */
type QueryFindSceneArgs = {
  id?: Maybe<Scalars["ID"]>
  checksum?: Maybe<Scalars["String"]>
}

/** The query root for this schema */
type QueryFindSceneByHashArgs = {
  input: SceneHashInput
}

/** The query root for this schema */
type QueryFindScenesArgs = {
  scene_filter?: Maybe<SceneFilterType>
  scene_ids?: Maybe<Array<Scalars["Int"]>>
  ids?: Maybe<Array<Scalars["ID"]>>
  filter?: Maybe<FindFilterType>
}

/** The query root for this schema */
type QueryFindScenesByPathRegexArgs = {
  filter?: Maybe<FindFilterType>
}

/** The query root for this schema */
type QueryFindDuplicateScenesArgs = {
  distance?: Maybe<Scalars["Int"]>
  duration_diff?: Maybe<Scalars["Float"]>
}

/** The query root for this schema */
type QuerySceneStreamsArgs = {
  id?: Maybe<Scalars["ID"]>
}

/** The query root for this schema */
type QueryParseSceneFilenamesArgs = {
  filter?: Maybe<FindFilterType>
  config: SceneParserInput
}

/** The query root for this schema */
type QueryFindSceneMarkersArgs = {
  scene_marker_filter?: Maybe<SceneMarkerFilterType>
  filter?: Maybe<FindFilterType>
}

/** The query root for this schema */
type QueryFindImageArgs = {
  id?: Maybe<Scalars["ID"]>
  checksum?: Maybe<Scalars["String"]>
}

/** The query root for this schema */
type QueryFindImagesArgs = {
  image_filter?: Maybe<ImageFilterType>
  image_ids?: Maybe<Array<Scalars["Int"]>>
  ids?: Maybe<Array<Scalars["ID"]>>
  filter?: Maybe<FindFilterType>
}

/** The query root for this schema */
type QueryFindPerformerArgs = {
  id: Scalars["ID"]
}

/** The query root for this schema */
type QueryFindPerformersArgs = {
  performer_filter?: Maybe<PerformerFilterType>
  filter?: Maybe<FindFilterType>
  performer_ids?: Maybe<Array<Scalars["Int"]>>
  ids?: Maybe<Array<Scalars["ID"]>>
}

/** The query root for this schema */
type QueryFindStudioArgs = {
  id: Scalars["ID"]
}

/** The query root for this schema */
type QueryFindStudiosArgs = {
  studio_filter?: Maybe<StudioFilterType>
  filter?: Maybe<FindFilterType>
  ids?: Maybe<Array<Scalars["ID"]>>
}

/** The query root for this schema */
type QueryFindMovieArgs = {
  id: Scalars["ID"]
}

/** The query root for this schema */
type QueryFindMoviesArgs = {
  movie_filter?: Maybe<MovieFilterType>
  filter?: Maybe<FindFilterType>
  ids?: Maybe<Array<Scalars["ID"]>>
}

/** The query root for this schema */
type QueryFindGalleryArgs = {
  id: Scalars["ID"]
}

/** The query root for this schema */
type QueryFindGalleriesArgs = {
  gallery_filter?: Maybe<GalleryFilterType>
  filter?: Maybe<FindFilterType>
  ids?: Maybe<Array<Scalars["ID"]>>
}

/** The query root for this schema */
type QueryFindTagArgs = {
  id: Scalars["ID"]
}

/** The query root for this schema */
type QueryFindTagsArgs = {
  tag_filter?: Maybe<TagFilterType>
  filter?: Maybe<FindFilterType>
  ids?: Maybe<Array<Scalars["ID"]>>
}

/** The query root for this schema */
type QueryMarkerWallArgs = {
  q?: Maybe<Scalars["String"]>
}

/** The query root for this schema */
type QuerySceneWallArgs = {
  q?: Maybe<Scalars["String"]>
}

/** The query root for this schema */
type QueryMarkerStringsArgs = {
  q?: Maybe<Scalars["String"]>
  sort?: Maybe<Scalars["String"]>
}

/** The query root for this schema */
type QuerySceneMarkerTagsArgs = {
  scene_id: Scalars["ID"]
}

/** The query root for this schema */
type QueryListScrapersArgs = {
  types: Array<ScrapeContentType>
}

/** The query root for this schema */
type QueryScrapeSingleSceneArgs = {
  source: ScraperSourceInput
  input: ScrapeSingleSceneInput
}

/** The query root for this schema */
type QueryScrapeMultiScenesArgs = {
  source: ScraperSourceInput
  input: ScrapeMultiScenesInput
}

/** The query root for this schema */
type QueryScrapeSingleStudioArgs = {
  source: ScraperSourceInput
  input: ScrapeSingleStudioInput
}

/** The query root for this schema */
type QueryScrapeSinglePerformerArgs = {
  source: ScraperSourceInput
  input: ScrapeSinglePerformerInput
}

/** The query root for this schema */
type QueryScrapeMultiPerformersArgs = {
  source: ScraperSourceInput
  input: ScrapeMultiPerformersInput
}

/** The query root for this schema */
type QueryScrapeSingleGalleryArgs = {
  source: ScraperSourceInput
  input: ScrapeSingleGalleryInput
}

/** The query root for this schema */
type QueryScrapeSingleMovieArgs = {
  source: ScraperSourceInput
  input: ScrapeSingleMovieInput
}

/** The query root for this schema */
type QueryScrapeUrlArgs = {
  url: Scalars["String"]
  ty: ScrapeContentType
}

/** The query root for this schema */
type QueryScrapePerformerUrlArgs = {
  url: Scalars["String"]
}

/** The query root for this schema */
type QueryScrapeSceneUrlArgs = {
  url: Scalars["String"]
}

/** The query root for this schema */
type QueryScrapeGalleryUrlArgs = {
  url: Scalars["String"]
}

/** The query root for this schema */
type QueryScrapeMovieUrlArgs = {
  url: Scalars["String"]
}

/** The query root for this schema */
type QueryInstalledPackagesArgs = {
  type: PackageType
}

/** The query root for this schema */
type QueryAvailablePackagesArgs = {
  type: PackageType
  source: Scalars["String"]
}

/** The query root for this schema */
type QueryDirectoryArgs = {
  path?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

/** The query root for this schema */
type QueryValidateStashBoxCredentialsArgs = {
  input: StashBoxInput
}

/** The query root for this schema */
type QueryFindJobArgs = {
  input: FindJobInput
}

type Mutation = {
  __typename?: "Mutation"
  setup: Scalars["Boolean"]
  /** Migrates the schema to the required version. Returns the job ID */
  migrate: Scalars["ID"]
  /** Downloads and installs ffmpeg and ffprobe binaries into the configuration directory. Returns the job ID. */
  downloadFFMpeg: Scalars["ID"]
  sceneCreate?: Maybe<Scene>
  sceneUpdate?: Maybe<Scene>
  sceneMerge?: Maybe<Scene>
  bulkSceneUpdate?: Maybe<Array<Scene>>
  sceneDestroy: Scalars["Boolean"]
  scenesDestroy: Scalars["Boolean"]
  scenesUpdate?: Maybe<Array<Maybe<Scene>>>
  /**
   * Increments the o-counter for a scene. Returns the new value
   * @deprecated Use sceneAddO instead
   */
  sceneIncrementO: Scalars["Int"]
  /**
   * Decrements the o-counter for a scene. Returns the new value
   * @deprecated Use sceneRemoveO instead
   */
  sceneDecrementO: Scalars["Int"]
  /** Increments the o-counter for a scene. Uses the current time if none provided. */
  sceneAddO: HistoryMutationResult
  /** Decrements the o-counter for a scene, removing the last recorded time if specific time not provided. Returns the new value */
  sceneDeleteO: HistoryMutationResult
  /** Resets the o-counter for a scene to 0. Returns the new value */
  sceneResetO: Scalars["Int"]
  /** Sets the resume time point (if provided) and adds the provided duration to the scene's play duration */
  sceneSaveActivity: Scalars["Boolean"]
  /**
   * Increments the play count for the scene. Returns the new play count value.
   * @deprecated Use sceneAddPlay instead
   */
  sceneIncrementPlayCount: Scalars["Int"]
  /** Increments the play count for the scene. Uses the current time if none provided. */
  sceneAddPlay: HistoryMutationResult
  /** Decrements the play count for the scene, removing the specific times or the last recorded time if not provided. */
  sceneDeletePlay: HistoryMutationResult
  /** Resets the play count for a scene to 0. Returns the new play count value. */
  sceneResetPlayCount: Scalars["Int"]
  /** Generates screenshot at specified time in seconds. Leave empty to generate default screenshot */
  sceneGenerateScreenshot: Scalars["String"]
  sceneMarkerCreate?: Maybe<SceneMarker>
  sceneMarkerUpdate?: Maybe<SceneMarker>
  sceneMarkerDestroy: Scalars["Boolean"]
  sceneAssignFile: Scalars["Boolean"]
  imageUpdate?: Maybe<Image>
  bulkImageUpdate?: Maybe<Array<Image>>
  imageDestroy: Scalars["Boolean"]
  imagesDestroy: Scalars["Boolean"]
  imagesUpdate?: Maybe<Array<Maybe<Image>>>
  /** Increments the o-counter for an image. Returns the new value */
  imageIncrementO: Scalars["Int"]
  /** Decrements the o-counter for an image. Returns the new value */
  imageDecrementO: Scalars["Int"]
  /** Resets the o-counter for a image to 0. Returns the new value */
  imageResetO: Scalars["Int"]
  galleryCreate?: Maybe<Gallery>
  galleryUpdate?: Maybe<Gallery>
  bulkGalleryUpdate?: Maybe<Array<Gallery>>
  galleryDestroy: Scalars["Boolean"]
  galleriesUpdate?: Maybe<Array<Maybe<Gallery>>>
  addGalleryImages: Scalars["Boolean"]
  removeGalleryImages: Scalars["Boolean"]
  galleryChapterCreate?: Maybe<GalleryChapter>
  galleryChapterUpdate?: Maybe<GalleryChapter>
  galleryChapterDestroy: Scalars["Boolean"]
  performerCreate?: Maybe<Performer>
  performerUpdate?: Maybe<Performer>
  performerDestroy: Scalars["Boolean"]
  performersDestroy: Scalars["Boolean"]
  bulkPerformerUpdate?: Maybe<Array<Performer>>
  studioCreate?: Maybe<Studio>
  studioUpdate?: Maybe<Studio>
  studioDestroy: Scalars["Boolean"]
  studiosDestroy: Scalars["Boolean"]
  movieCreate?: Maybe<Movie>
  movieUpdate?: Maybe<Movie>
  movieDestroy: Scalars["Boolean"]
  moviesDestroy: Scalars["Boolean"]
  bulkMovieUpdate?: Maybe<Array<Movie>>
  tagCreate?: Maybe<Tag>
  tagUpdate?: Maybe<Tag>
  tagDestroy: Scalars["Boolean"]
  tagsDestroy: Scalars["Boolean"]
  tagsMerge?: Maybe<Tag>
  bulkTagUpdate?: Maybe<Array<Tag>>
  /**
   * Moves the given files to the given destination. Returns true if successful.
   * Either the destination_folder or destination_folder_id must be provided.
   * If both are provided, the destination_folder_id takes precedence.
   * Destination folder must be a subfolder of one of the stash library paths.
   * If provided, destination_basename must be a valid filename with an extension that
   * matches one of the media extensions.
   * Creates folder hierarchy if needed.
   */
  moveFiles: Scalars["Boolean"]
  deleteFiles: Scalars["Boolean"]
  fileSetFingerprints: Scalars["Boolean"]
  saveFilter: SavedFilter
  destroySavedFilter: Scalars["Boolean"]
  setDefaultFilter: Scalars["Boolean"]
  /** Change general configuration options */
  configureGeneral: ConfigGeneralResult
  configureInterface: ConfigInterfaceResult
  configureDLNA: ConfigDlnaResult
  configureScraping: ConfigScrapingResult
  configureDefaults: ConfigDefaultSettingsResult
  /** overwrites the entire plugin configuration for the given plugin */
  configurePlugin: Scalars["Map"]
  /**
   * overwrites the UI configuration
   * if input is provided, then the entire UI configuration is replaced
   * if partial is provided, then the partial UI configuration is merged into the existing UI configuration
   */
  configureUI: Scalars["Map"]
  /**
   * sets a single UI key value
   * key is a dot separated path to the value
   */
  configureUISetting: Scalars["Map"]
  /** Generate and set (or clear) API key */
  generateAPIKey: Scalars["String"]
  /** Returns a link to download the result */
  exportObjects?: Maybe<Scalars["String"]>
  /** Performs an incremental import. Returns the job ID */
  importObjects: Scalars["ID"]
  /** Start an full import. Completely wipes the database and imports from the metadata directory. Returns the job ID */
  metadataImport: Scalars["ID"]
  /** Start a full export. Outputs to the metadata directory. Returns the job ID */
  metadataExport: Scalars["ID"]
  /** Start a scan. Returns the job ID */
  metadataScan: Scalars["ID"]
  /** Start generating content. Returns the job ID */
  metadataGenerate: Scalars["ID"]
  /** Start auto-tagging. Returns the job ID */
  metadataAutoTag: Scalars["ID"]
  /** Clean metadata. Returns the job ID */
  metadataClean: Scalars["ID"]
  /** Clean generated files. Returns the job ID */
  metadataCleanGenerated: Scalars["ID"]
  /** Identifies scenes using scrapers. Returns the job ID */
  metadataIdentify: Scalars["ID"]
  /** Migrate generated files for the current hash naming */
  migrateHashNaming: Scalars["ID"]
  /** Migrates legacy scene screenshot files into the blob storage */
  migrateSceneScreenshots: Scalars["ID"]
  /** Migrates blobs from the old storage system to the current one */
  migrateBlobs: Scalars["ID"]
  /** Anonymise the database in a separate file. Optionally returns a link to download the database file */
  anonymiseDatabase?: Maybe<Scalars["String"]>
  /** Optimises the database. Returns the job ID */
  optimiseDatabase: Scalars["ID"]
  /** Reload scrapers */
  reloadScrapers: Scalars["Boolean"]
  /**
   * Enable/disable plugins - enabledMap is a map of plugin IDs to enabled booleans.
   * Plugins not in the map are not affected.
   */
  setPluginsEnabled: Scalars["Boolean"]
  /**
   * Run a plugin task.
   * If task_name is provided, then the task must exist in the plugin config and the tasks configuration
   * will be used to run the plugin.
   * If no task_name is provided, then the plugin will be executed with the arguments provided only.
   * Returns the job ID
   */
  runPluginTask: Scalars["ID"]
  /**
   * Runs a plugin operation. The operation is run immediately and does not use the job queue.
   * Returns a map of the result.
   */
  runPluginOperation?: Maybe<Scalars["Any"]>
  reloadPlugins: Scalars["Boolean"]
  /**
   * Installs the given packages.
   * If a package is already installed, it will be updated if needed..
   * If an error occurs when installing a package, the job will continue to install the remaining packages.
   * Returns the job ID
   */
  installPackages: Scalars["ID"]
  /**
   * Updates the given packages.
   * If a package is not installed, it will not be installed.
   * If a package does not need to be updated, it will not be updated.
   * If no packages are provided, all packages of the given type will be updated.
   * If an error occurs when updating a package, the job will continue to update the remaining packages.
   * Returns the job ID.
   */
  updatePackages: Scalars["ID"]
  /**
   * Uninstalls the given packages.
   * If an error occurs when uninstalling a package, the job will continue to uninstall the remaining packages.
   * Returns the job ID
   */
  uninstallPackages: Scalars["ID"]
  stopJob: Scalars["Boolean"]
  stopAllJobs: Scalars["Boolean"]
  /** Submit fingerprints to stash-box instance */
  submitStashBoxFingerprints: Scalars["Boolean"]
  /** Submit scene as draft to stash-box instance */
  submitStashBoxSceneDraft?: Maybe<Scalars["ID"]>
  /** Submit performer as draft to stash-box instance */
  submitStashBoxPerformerDraft?: Maybe<Scalars["ID"]>
  /** Backup the database. Optionally returns a link to download the database file */
  backupDatabase?: Maybe<Scalars["String"]>
  /** DANGEROUS: Execute an arbitrary SQL statement that returns rows. */
  querySQL: SqlQueryResult
  /** DANGEROUS: Execute an arbitrary SQL statement without returning any rows. */
  execSQL: SqlExecResult
  /** Run batch performer tag task. Returns the job ID. */
  stashBoxBatchPerformerTag: Scalars["String"]
  /** Run batch studio tag task. Returns the job ID. */
  stashBoxBatchStudioTag: Scalars["String"]
  /** Enables DLNA for an optional duration. Has no effect if DLNA is enabled by default */
  enableDLNA: Scalars["Boolean"]
  /** Disables DLNA for an optional duration. Has no effect if DLNA is disabled by default */
  disableDLNA: Scalars["Boolean"]
  /** Enables an IP address for DLNA for an optional duration */
  addTempDLNAIP: Scalars["Boolean"]
  /** Removes an IP address from the temporary DLNA whitelist */
  removeTempDLNAIP: Scalars["Boolean"]
}

type MutationSetupArgs = {
  input: SetupInput
}

type MutationMigrateArgs = {
  input: MigrateInput
}

type MutationSceneCreateArgs = {
  input: SceneCreateInput
}

type MutationSceneUpdateArgs = {
  input: SceneUpdateInput
}

type MutationSceneMergeArgs = {
  input: SceneMergeInput
}

type MutationBulkSceneUpdateArgs = {
  input: BulkSceneUpdateInput
}

type MutationSceneDestroyArgs = {
  input: SceneDestroyInput
}

type MutationScenesDestroyArgs = {
  input: ScenesDestroyInput
}

type MutationScenesUpdateArgs = {
  input: Array<SceneUpdateInput>
}

type MutationSceneIncrementOArgs = {
  id: Scalars["ID"]
}

type MutationSceneDecrementOArgs = {
  id: Scalars["ID"]
}

type MutationSceneAddOArgs = {
  id: Scalars["ID"]
  times?: Maybe<Array<Scalars["Timestamp"]>>
}

type MutationSceneDeleteOArgs = {
  id: Scalars["ID"]
  times?: Maybe<Array<Scalars["Timestamp"]>>
}

type MutationSceneResetOArgs = {
  id: Scalars["ID"]
}

type MutationSceneSaveActivityArgs = {
  id: Scalars["ID"]
  resume_time?: Maybe<Scalars["Float"]>
  playDuration?: Maybe<Scalars["Float"]>
}

type MutationSceneIncrementPlayCountArgs = {
  id: Scalars["ID"]
}

type MutationSceneAddPlayArgs = {
  id: Scalars["ID"]
  times?: Maybe<Array<Scalars["Timestamp"]>>
}

type MutationSceneDeletePlayArgs = {
  id: Scalars["ID"]
  times?: Maybe<Array<Scalars["Timestamp"]>>
}

type MutationSceneResetPlayCountArgs = {
  id: Scalars["ID"]
}

type MutationSceneGenerateScreenshotArgs = {
  id: Scalars["ID"]
  at?: Maybe<Scalars["Float"]>
}

type MutationSceneMarkerCreateArgs = {
  input: SceneMarkerCreateInput
}

type MutationSceneMarkerUpdateArgs = {
  input: SceneMarkerUpdateInput
}

type MutationSceneMarkerDestroyArgs = {
  id: Scalars["ID"]
}

type MutationSceneAssignFileArgs = {
  input: AssignSceneFileInput
}

type MutationImageUpdateArgs = {
  input: ImageUpdateInput
}

type MutationBulkImageUpdateArgs = {
  input: BulkImageUpdateInput
}

type MutationImageDestroyArgs = {
  input: ImageDestroyInput
}

type MutationImagesDestroyArgs = {
  input: ImagesDestroyInput
}

type MutationImagesUpdateArgs = {
  input: Array<ImageUpdateInput>
}

type MutationImageIncrementOArgs = {
  id: Scalars["ID"]
}

type MutationImageDecrementOArgs = {
  id: Scalars["ID"]
}

type MutationImageResetOArgs = {
  id: Scalars["ID"]
}

type MutationGalleryCreateArgs = {
  input: GalleryCreateInput
}

type MutationGalleryUpdateArgs = {
  input: GalleryUpdateInput
}

type MutationBulkGalleryUpdateArgs = {
  input: BulkGalleryUpdateInput
}

type MutationGalleryDestroyArgs = {
  input: GalleryDestroyInput
}

type MutationGalleriesUpdateArgs = {
  input: Array<GalleryUpdateInput>
}

type MutationAddGalleryImagesArgs = {
  input: GalleryAddInput
}

type MutationRemoveGalleryImagesArgs = {
  input: GalleryRemoveInput
}

type MutationGalleryChapterCreateArgs = {
  input: GalleryChapterCreateInput
}

type MutationGalleryChapterUpdateArgs = {
  input: GalleryChapterUpdateInput
}

type MutationGalleryChapterDestroyArgs = {
  id: Scalars["ID"]
}

type MutationPerformerCreateArgs = {
  input: PerformerCreateInput
}

type MutationPerformerUpdateArgs = {
  input: PerformerUpdateInput
}

type MutationPerformerDestroyArgs = {
  input: PerformerDestroyInput
}

type MutationPerformersDestroyArgs = {
  ids: Array<Scalars["ID"]>
}

type MutationBulkPerformerUpdateArgs = {
  input: BulkPerformerUpdateInput
}

type MutationStudioCreateArgs = {
  input: StudioCreateInput
}

type MutationStudioUpdateArgs = {
  input: StudioUpdateInput
}

type MutationStudioDestroyArgs = {
  input: StudioDestroyInput
}

type MutationStudiosDestroyArgs = {
  ids: Array<Scalars["ID"]>
}

type MutationMovieCreateArgs = {
  input: MovieCreateInput
}

type MutationMovieUpdateArgs = {
  input: MovieUpdateInput
}

type MutationMovieDestroyArgs = {
  input: MovieDestroyInput
}

type MutationMoviesDestroyArgs = {
  ids: Array<Scalars["ID"]>
}

type MutationBulkMovieUpdateArgs = {
  input: BulkMovieUpdateInput
}

type MutationTagCreateArgs = {
  input: TagCreateInput
}

type MutationTagUpdateArgs = {
  input: TagUpdateInput
}

type MutationTagDestroyArgs = {
  input: TagDestroyInput
}

type MutationTagsDestroyArgs = {
  ids: Array<Scalars["ID"]>
}

type MutationTagsMergeArgs = {
  input: TagsMergeInput
}

type MutationBulkTagUpdateArgs = {
  input: BulkTagUpdateInput
}

type MutationMoveFilesArgs = {
  input: MoveFilesInput
}

type MutationDeleteFilesArgs = {
  ids: Array<Scalars["ID"]>
}

type MutationFileSetFingerprintsArgs = {
  input: FileSetFingerprintsInput
}

type MutationSaveFilterArgs = {
  input: SaveFilterInput
}

type MutationDestroySavedFilterArgs = {
  input: DestroyFilterInput
}

type MutationSetDefaultFilterArgs = {
  input: SetDefaultFilterInput
}

type MutationConfigureGeneralArgs = {
  input: ConfigGeneralInput
}

type MutationConfigureInterfaceArgs = {
  input: ConfigInterfaceInput
}

type MutationConfigureDlnaArgs = {
  input: ConfigDlnaInput
}

type MutationConfigureScrapingArgs = {
  input: ConfigScrapingInput
}

type MutationConfigureDefaultsArgs = {
  input: ConfigDefaultSettingsInput
}

type MutationConfigurePluginArgs = {
  plugin_id: Scalars["ID"]
  input: Scalars["Map"]
}

type MutationConfigureUiArgs = {
  input?: Maybe<Scalars["Map"]>
  partial?: Maybe<Scalars["Map"]>
}

type MutationConfigureUiSettingArgs = {
  key: Scalars["String"]
  value?: Maybe<Scalars["Any"]>
}

type MutationGenerateApiKeyArgs = {
  input: GenerateApiKeyInput
}

type MutationExportObjectsArgs = {
  input: ExportObjectsInput
}

type MutationImportObjectsArgs = {
  input: ImportObjectsInput
}

type MutationMetadataScanArgs = {
  input: ScanMetadataInput
}

type MutationMetadataGenerateArgs = {
  input: GenerateMetadataInput
}

type MutationMetadataAutoTagArgs = {
  input: AutoTagMetadataInput
}

type MutationMetadataCleanArgs = {
  input: CleanMetadataInput
}

type MutationMetadataCleanGeneratedArgs = {
  input: CleanGeneratedInput
}

type MutationMetadataIdentifyArgs = {
  input: IdentifyMetadataInput
}

type MutationMigrateSceneScreenshotsArgs = {
  input: MigrateSceneScreenshotsInput
}

type MutationMigrateBlobsArgs = {
  input: MigrateBlobsInput
}

type MutationAnonymiseDatabaseArgs = {
  input: AnonymiseDatabaseInput
}

type MutationSetPluginsEnabledArgs = {
  enabledMap: Scalars["BoolMap"]
}

type MutationRunPluginTaskArgs = {
  plugin_id: Scalars["ID"]
  task_name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  args?: Maybe<Array<PluginArgInput>>
  args_map?: Maybe<Scalars["Map"]>
}

type MutationRunPluginOperationArgs = {
  plugin_id: Scalars["ID"]
  args?: Maybe<Scalars["Map"]>
}

type MutationInstallPackagesArgs = {
  type: PackageType
  packages: Array<PackageSpecInput>
}

type MutationUpdatePackagesArgs = {
  type: PackageType
  packages?: Maybe<Array<PackageSpecInput>>
}

type MutationUninstallPackagesArgs = {
  type: PackageType
  packages: Array<PackageSpecInput>
}

type MutationStopJobArgs = {
  job_id: Scalars["ID"]
}

type MutationSubmitStashBoxFingerprintsArgs = {
  input: StashBoxFingerprintSubmissionInput
}

type MutationSubmitStashBoxSceneDraftArgs = {
  input: StashBoxDraftSubmissionInput
}

type MutationSubmitStashBoxPerformerDraftArgs = {
  input: StashBoxDraftSubmissionInput
}

type MutationBackupDatabaseArgs = {
  input: BackupDatabaseInput
}

type MutationQuerySqlArgs = {
  sql: Scalars["String"]
  args?: Maybe<Array<Maybe<Scalars["Any"]>>>
}

type MutationExecSqlArgs = {
  sql: Scalars["String"]
  args?: Maybe<Array<Maybe<Scalars["Any"]>>>
}

type MutationStashBoxBatchPerformerTagArgs = {
  input: StashBoxBatchTagInput
}

type MutationStashBoxBatchStudioTagArgs = {
  input: StashBoxBatchTagInput
}

type MutationEnableDlnaArgs = {
  input: EnableDlnaInput
}

type MutationDisableDlnaArgs = {
  input: DisableDlnaInput
}

type MutationAddTempDlnaipArgs = {
  input: AddTempDlnaipInput
}

type MutationRemoveTempDlnaipArgs = {
  input: RemoveTempDlnaipInput
}

type Subscription = {
  __typename?: "Subscription"
  /** Update from the metadata manager */
  jobsSubscribe: JobStatusUpdate
  loggingSubscribe: Array<LogEntry>
  scanCompleteSubscribe: Scalars["Boolean"]
}

type SetupInput = {
  /** Empty to indicate $HOME/.stash/config.yml default */
  configLocation: Scalars["String"]
  stashes: Array<StashConfigInput>
  /** Empty to indicate default */
  databaseFile: Scalars["String"]
  /** Empty to indicate default */
  generatedLocation: Scalars["String"]
  /** Empty to indicate default */
  cacheLocation: Scalars["String"]
  storeBlobsInDatabase: Scalars["Boolean"]
  /** Empty to indicate default - only applicable if storeBlobsInDatabase is false */
  blobsLocation: Scalars["String"]
}

enum StreamingResolutionEnum {
  /** 240p */
  Low = "LOW",
  /** 480p */
  Standard = "STANDARD",
  /** 720p */
  StandardHd = "STANDARD_HD",
  /** 1080p */
  FullHd = "FULL_HD",
  /** 4k */
  FourK = "FOUR_K",
  /** Original */
  Original = "ORIGINAL"
}

enum PreviewPreset {
  /** X264_ULTRAFAST */
  Ultrafast = "ultrafast",
  /** X264_VERYFAST */
  Veryfast = "veryfast",
  /** X264_FAST */
  Fast = "fast",
  /** X264_MEDIUM */
  Medium = "medium",
  /** X264_SLOW */
  Slow = "slow",
  /** X264_SLOWER */
  Slower = "slower",
  /** X264_VERYSLOW */
  Veryslow = "veryslow"
}

enum HashAlgorithm {
  Md5 = "MD5",
  /** oshash */
  Oshash = "OSHASH"
}

enum BlobsStorageType {
  /** Database */
  Database = "DATABASE",
  /** Filesystem */
  Filesystem = "FILESYSTEM"
}

type ConfigGeneralInput = {
  /** Array of file paths to content */
  stashes?: Maybe<Array<StashConfigInput>>
  /** Path to the SQLite database */
  databasePath?: Maybe<Scalars["String"]>
  /** Path to backup directory */
  backupDirectoryPath?: Maybe<Scalars["String"]>
  /** Path to generated files */
  generatedPath?: Maybe<Scalars["String"]>
  /** Path to import/files */
  metadataPath?: Maybe<Scalars["String"]>
  /** Path to scrapers */
  scrapersPath?: Maybe<Scalars["String"]>
  /** Path to plugins */
  pluginsPath?: Maybe<Scalars["String"]>
  /** Path to cache */
  cachePath?: Maybe<Scalars["String"]>
  /** Path to blobs - required for filesystem blob storage */
  blobsPath?: Maybe<Scalars["String"]>
  /** Where to store blobs */
  blobsStorage?: Maybe<BlobsStorageType>
  /** Path to the ffmpeg binary. If empty, stash will attempt to find it in the path or config directory */
  ffmpegPath?: Maybe<Scalars["String"]>
  /** Path to the ffprobe binary. If empty, stash will attempt to find it in the path or config directory */
  ffprobePath?: Maybe<Scalars["String"]>
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5?: Maybe<Scalars["Boolean"]>
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm?: Maybe<HashAlgorithm>
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks?: Maybe<Scalars["Int"]>
  /** Include audio stream in previews */
  previewAudio?: Maybe<Scalars["Boolean"]>
  /** Number of segments in a preview file */
  previewSegments?: Maybe<Scalars["Int"]>
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: Maybe<Scalars["Float"]>
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: Maybe<Scalars["String"]>
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: Maybe<Scalars["String"]>
  /** Preset when generating preview */
  previewPreset?: Maybe<PreviewPreset>
  /** Transcode Hardware Acceleration */
  transcodeHardwareAcceleration?: Maybe<Scalars["Boolean"]>
  /** Max generated transcode size */
  maxTranscodeSize?: Maybe<StreamingResolutionEnum>
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: Maybe<StreamingResolutionEnum>
  /**
   * ffmpeg transcode input args - injected before input file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeInputArgs?: Maybe<Array<Scalars["String"]>>
  /**
   * ffmpeg transcode output args - injected before output file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeOutputArgs?: Maybe<Array<Scalars["String"]>>
  /**
   * ffmpeg stream input args - injected before input file
   * These are applied when live transcoding
   */
  liveTranscodeInputArgs?: Maybe<Array<Scalars["String"]>>
  /**
   * ffmpeg stream output args - injected before output file
   * These are applied when live transcoding
   */
  liveTranscodeOutputArgs?: Maybe<Array<Scalars["String"]>>
  /** whether to include range in generated funscript heatmaps */
  drawFunscriptHeatmapRange?: Maybe<Scalars["Boolean"]>
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails?: Maybe<Scalars["Boolean"]>
  /** Create Image Clips from Video extensions when Videos are disabled in Library */
  createImageClipsFromVideos?: Maybe<Scalars["Boolean"]>
  /** Username */
  username?: Maybe<Scalars["String"]>
  /** Password */
  password?: Maybe<Scalars["String"]>
  /** Maximum session cookie age */
  maxSessionAge?: Maybe<Scalars["Int"]>
  /** Name of the log file */
  logFile?: Maybe<Scalars["String"]>
  /** Whether to also output to stderr */
  logOut?: Maybe<Scalars["Boolean"]>
  /** Minimum log level */
  logLevel?: Maybe<Scalars["String"]>
  /** Whether to log http access */
  logAccess?: Maybe<Scalars["Boolean"]>
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders?: Maybe<Scalars["Boolean"]>
  /** Regex used to identify images as gallery covers */
  galleryCoverRegex?: Maybe<Scalars["String"]>
  /** Array of video file extensions */
  videoExtensions?: Maybe<Array<Scalars["String"]>>
  /** Array of image file extensions */
  imageExtensions?: Maybe<Array<Scalars["String"]>>
  /** Array of gallery zip file extensions */
  galleryExtensions?: Maybe<Array<Scalars["String"]>>
  /** Array of file regexp to exclude from Video Scans */
  excludes?: Maybe<Array<Scalars["String"]>>
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes?: Maybe<Array<Scalars["String"]>>
  /** Custom Performer Image Location */
  customPerformerImageLocation?: Maybe<Scalars["String"]>
  /** Stash-box instances used for tagging */
  stashBoxes?: Maybe<Array<StashBoxInput>>
  /** Python path - resolved using path if unset */
  pythonPath?: Maybe<Scalars["String"]>
  /** Source of scraper packages */
  scraperPackageSources?: Maybe<Array<PackageSourceInput>>
  /** Source of plugin packages */
  pluginPackageSources?: Maybe<Array<PackageSourceInput>>
}

type ConfigGeneralResult = {
  __typename?: "ConfigGeneralResult"
  /** Array of file paths to content */
  stashes: Array<StashConfig>
  /** Path to the SQLite database */
  databasePath: Scalars["String"]
  /** Path to backup directory */
  backupDirectoryPath: Scalars["String"]
  /** Path to generated files */
  generatedPath: Scalars["String"]
  /** Path to import/files */
  metadataPath: Scalars["String"]
  /** Path to the config file used */
  configFilePath: Scalars["String"]
  /** Path to scrapers */
  scrapersPath: Scalars["String"]
  /** Path to plugins */
  pluginsPath: Scalars["String"]
  /** Path to cache */
  cachePath: Scalars["String"]
  /** Path to blobs - required for filesystem blob storage */
  blobsPath: Scalars["String"]
  /** Where to store blobs */
  blobsStorage: BlobsStorageType
  /** Path to the ffmpeg binary. If empty, stash will attempt to find it in the path or config directory */
  ffmpegPath: Scalars["String"]
  /** Path to the ffprobe binary. If empty, stash will attempt to find it in the path or config directory */
  ffprobePath: Scalars["String"]
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5: Scalars["Boolean"]
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm: HashAlgorithm
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks: Scalars["Int"]
  /** Include audio stream in previews */
  previewAudio: Scalars["Boolean"]
  /** Number of segments in a preview file */
  previewSegments: Scalars["Int"]
  /** Preview segment duration, in seconds */
  previewSegmentDuration: Scalars["Float"]
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart: Scalars["String"]
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd: Scalars["String"]
  /** Preset when generating preview */
  previewPreset: PreviewPreset
  /** Transcode Hardware Acceleration */
  transcodeHardwareAcceleration: Scalars["Boolean"]
  /** Max generated transcode size */
  maxTranscodeSize?: Maybe<StreamingResolutionEnum>
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: Maybe<StreamingResolutionEnum>
  /**
   * ffmpeg transcode input args - injected before input file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeInputArgs: Array<Scalars["String"]>
  /**
   * ffmpeg transcode output args - injected before output file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeOutputArgs: Array<Scalars["String"]>
  /**
   * ffmpeg stream input args - injected before input file
   * These are applied when live transcoding
   */
  liveTranscodeInputArgs: Array<Scalars["String"]>
  /**
   * ffmpeg stream output args - injected before output file
   * These are applied when live transcoding
   */
  liveTranscodeOutputArgs: Array<Scalars["String"]>
  /** whether to include range in generated funscript heatmaps */
  drawFunscriptHeatmapRange: Scalars["Boolean"]
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails: Scalars["Boolean"]
  /** Create Image Clips from Video extensions when Videos are disabled in Library */
  createImageClipsFromVideos: Scalars["Boolean"]
  /** API Key */
  apiKey: Scalars["String"]
  /** Username */
  username: Scalars["String"]
  /** Password */
  password: Scalars["String"]
  /** Maximum session cookie age */
  maxSessionAge: Scalars["Int"]
  /** Name of the log file */
  logFile?: Maybe<Scalars["String"]>
  /** Whether to also output to stderr */
  logOut: Scalars["Boolean"]
  /** Minimum log level */
  logLevel: Scalars["String"]
  /** Whether to log http access */
  logAccess: Scalars["Boolean"]
  /** Array of video file extensions */
  videoExtensions: Array<Scalars["String"]>
  /** Array of image file extensions */
  imageExtensions: Array<Scalars["String"]>
  /** Array of gallery zip file extensions */
  galleryExtensions: Array<Scalars["String"]>
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders: Scalars["Boolean"]
  /** Regex used to identify images as gallery covers */
  galleryCoverRegex: Scalars["String"]
  /** Array of file regexp to exclude from Video Scans */
  excludes: Array<Scalars["String"]>
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes: Array<Scalars["String"]>
  /** Custom Performer Image Location */
  customPerformerImageLocation?: Maybe<Scalars["String"]>
  /** Stash-box instances used for tagging */
  stashBoxes: Array<StashBox>
  /** Python path - resolved using path if unset */
  pythonPath: Scalars["String"]
  /** Source of scraper packages */
  scraperPackageSources: Array<PackageSource>
  /** Source of plugin packages */
  pluginPackageSources: Array<PackageSource>
}

type ConfigDisableDropdownCreateInput = {
  performer?: Maybe<Scalars["Boolean"]>
  tag?: Maybe<Scalars["Boolean"]>
  studio?: Maybe<Scalars["Boolean"]>
  movie?: Maybe<Scalars["Boolean"]>
}

enum ImageLightboxDisplayMode {
  Original = "ORIGINAL",
  FitXy = "FIT_XY",
  FitX = "FIT_X"
}

enum ImageLightboxScrollMode {
  Zoom = "ZOOM",
  PanY = "PAN_Y"
}

type ConfigImageLightboxInput = {
  slideshowDelay?: Maybe<Scalars["Int"]>
  displayMode?: Maybe<ImageLightboxDisplayMode>
  scaleUp?: Maybe<Scalars["Boolean"]>
  resetZoomOnNav?: Maybe<Scalars["Boolean"]>
  scrollMode?: Maybe<ImageLightboxScrollMode>
  scrollAttemptsBeforeChange?: Maybe<Scalars["Int"]>
}

type ConfigImageLightboxResult = {
  __typename?: "ConfigImageLightboxResult"
  slideshowDelay?: Maybe<Scalars["Int"]>
  displayMode?: Maybe<ImageLightboxDisplayMode>
  scaleUp?: Maybe<Scalars["Boolean"]>
  resetZoomOnNav?: Maybe<Scalars["Boolean"]>
  scrollMode?: Maybe<ImageLightboxScrollMode>
  scrollAttemptsBeforeChange: Scalars["Int"]
}

type ConfigInterfaceInput = {
  /** Ordered list of items that should be shown in the menu */
  menuItems?: Maybe<Array<Scalars["String"]>>
  /** Enable sound on mouseover previews */
  soundOnPreview?: Maybe<Scalars["Boolean"]>
  /** Show title and tags in wall view */
  wallShowTitle?: Maybe<Scalars["Boolean"]>
  /** Wall playback type */
  wallPlayback?: Maybe<Scalars["String"]>
  /** Show scene scrubber by default */
  showScrubber?: Maybe<Scalars["Boolean"]>
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: Maybe<Scalars["Int"]>
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: Maybe<Scalars["Boolean"]>
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: Maybe<Scalars["Boolean"]>
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: Maybe<Scalars["Boolean"]>
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: Maybe<Scalars["Boolean"]>
  /** Custom CSS */
  css?: Maybe<Scalars["String"]>
  cssEnabled?: Maybe<Scalars["Boolean"]>
  /** Custom Javascript */
  javascript?: Maybe<Scalars["String"]>
  javascriptEnabled?: Maybe<Scalars["Boolean"]>
  /** Custom Locales */
  customLocales?: Maybe<Scalars["String"]>
  customLocalesEnabled?: Maybe<Scalars["Boolean"]>
  /** Interface language */
  language?: Maybe<Scalars["String"]>
  imageLightbox?: Maybe<ConfigImageLightboxInput>
  /** Set to true to disable creating new objects via the dropdown menus */
  disableDropdownCreate?: Maybe<ConfigDisableDropdownCreateInput>
  /** Handy Connection Key */
  handyKey?: Maybe<Scalars["String"]>
  /** Funscript Time Offset */
  funscriptOffset?: Maybe<Scalars["Int"]>
  /** Whether to use Stash Hosted Funscript */
  useStashHostedFunscript?: Maybe<Scalars["Boolean"]>
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: Maybe<Scalars["Boolean"]>
  /** True if we should send notifications to the desktop */
  notificationsEnabled?: Maybe<Scalars["Boolean"]>
}

type ConfigDisableDropdownCreate = {
  __typename?: "ConfigDisableDropdownCreate"
  performer: Scalars["Boolean"]
  tag: Scalars["Boolean"]
  studio: Scalars["Boolean"]
  movie: Scalars["Boolean"]
}

type ConfigInterfaceResult = {
  __typename?: "ConfigInterfaceResult"
  /** Ordered list of items that should be shown in the menu */
  menuItems?: Maybe<Array<Scalars["String"]>>
  /** Enable sound on mouseover previews */
  soundOnPreview?: Maybe<Scalars["Boolean"]>
  /** Show title and tags in wall view */
  wallShowTitle?: Maybe<Scalars["Boolean"]>
  /** Wall playback type */
  wallPlayback?: Maybe<Scalars["String"]>
  /** Show scene scrubber by default */
  showScrubber?: Maybe<Scalars["Boolean"]>
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: Maybe<Scalars["Int"]>
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: Maybe<Scalars["Boolean"]>
  /** True if we should send desktop notifications */
  notificationsEnabled?: Maybe<Scalars["Boolean"]>
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: Maybe<Scalars["Boolean"]>
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: Maybe<Scalars["Boolean"]>
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: Maybe<Scalars["Boolean"]>
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: Maybe<Scalars["Boolean"]>
  /** Custom CSS */
  css?: Maybe<Scalars["String"]>
  cssEnabled?: Maybe<Scalars["Boolean"]>
  /** Custom Javascript */
  javascript?: Maybe<Scalars["String"]>
  javascriptEnabled?: Maybe<Scalars["Boolean"]>
  /** Custom Locales */
  customLocales?: Maybe<Scalars["String"]>
  customLocalesEnabled?: Maybe<Scalars["Boolean"]>
  /** Interface language */
  language?: Maybe<Scalars["String"]>
  imageLightbox: ConfigImageLightboxResult
  /** Fields are true if creating via dropdown menus are disabled */
  disableDropdownCreate: ConfigDisableDropdownCreate
  /** Handy Connection Key */
  handyKey?: Maybe<Scalars["String"]>
  /** Funscript Time Offset */
  funscriptOffset?: Maybe<Scalars["Int"]>
  /** Whether to use Stash Hosted Funscript */
  useStashHostedFunscript?: Maybe<Scalars["Boolean"]>
}

type ConfigDlnaInput = {
  serverName?: Maybe<Scalars["String"]>
  /** True if DLNA service should be enabled by default */
  enabled?: Maybe<Scalars["Boolean"]>
  /** Defaults to 1338 */
  port?: Maybe<Scalars["Int"]>
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs?: Maybe<Array<Scalars["String"]>>
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces?: Maybe<Array<Scalars["String"]>>
  /** Order to sort videos */
  videoSortOrder?: Maybe<Scalars["String"]>
}

type ConfigDlnaResult = {
  __typename?: "ConfigDLNAResult"
  serverName: Scalars["String"]
  /** True if DLNA service should be enabled by default */
  enabled: Scalars["Boolean"]
  /** Defaults to 1338 */
  port: Scalars["Int"]
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs: Array<Scalars["String"]>
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces: Array<Scalars["String"]>
  /** Order to sort videos */
  videoSortOrder: Scalars["String"]
}

type ConfigScrapingInput = {
  /** Scraper user agent string */
  scraperUserAgent?: Maybe<Scalars["String"]>
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: Maybe<Scalars["String"]>
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck?: Maybe<Scalars["Boolean"]>
  /** Tags blacklist during scraping */
  excludeTagPatterns?: Maybe<Array<Scalars["String"]>>
}

type ConfigScrapingResult = {
  __typename?: "ConfigScrapingResult"
  /** Scraper user agent string */
  scraperUserAgent?: Maybe<Scalars["String"]>
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: Maybe<Scalars["String"]>
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck: Scalars["Boolean"]
  /** Tags blacklist during scraping */
  excludeTagPatterns: Array<Scalars["String"]>
}

type ConfigDefaultSettingsResult = {
  __typename?: "ConfigDefaultSettingsResult"
  scan?: Maybe<ScanMetadataOptions>
  identify?: Maybe<IdentifyMetadataTaskOptions>
  autoTag?: Maybe<AutoTagMetadataOptions>
  generate?: Maybe<GenerateMetadataOptions>
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: Maybe<Scalars["Boolean"]>
  /** If true, delete generated supporting files checkbox will be checked by default */
  deleteGenerated?: Maybe<Scalars["Boolean"]>
}

type ConfigDefaultSettingsInput = {
  scan?: Maybe<ScanMetadataInput>
  identify?: Maybe<IdentifyMetadataInput>
  autoTag?: Maybe<AutoTagMetadataInput>
  generate?: Maybe<GenerateMetadataInput>
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: Maybe<Scalars["Boolean"]>
  /** If true, delete generated files checkbox will be checked by default */
  deleteGenerated?: Maybe<Scalars["Boolean"]>
}

/** All configuration settings */
type ConfigResult = {
  __typename?: "ConfigResult"
  general: ConfigGeneralResult
  interface: ConfigInterfaceResult
  dlna: ConfigDlnaResult
  scraping: ConfigScrapingResult
  defaults: ConfigDefaultSettingsResult
  ui: Scalars["Map"]
  plugins: Scalars["PluginConfigMap"]
}

/** All configuration settings */
type ConfigResultPluginsArgs = {
  include?: Maybe<Array<Scalars["ID"]>>
}

/** Directory structure of a path */
type Directory = {
  __typename?: "Directory"
  path: Scalars["String"]
  parent?: Maybe<Scalars["String"]>
  directories: Array<Scalars["String"]>
}

/** Stash configuration details */
type StashConfigInput = {
  path: Scalars["String"]
  excludeVideo: Scalars["Boolean"]
  excludeImage: Scalars["Boolean"]
}

type StashConfig = {
  __typename?: "StashConfig"
  path: Scalars["String"]
  excludeVideo: Scalars["Boolean"]
  excludeImage: Scalars["Boolean"]
}

type GenerateApiKeyInput = {
  clear?: Maybe<Scalars["Boolean"]>
}

type StashBoxValidationResult = {
  __typename?: "StashBoxValidationResult"
  valid: Scalars["Boolean"]
  status: Scalars["String"]
}

type Dlnaip = {
  __typename?: "DLNAIP"
  ipAddress: Scalars["String"]
  /** Time until IP will be no longer allowed/disallowed */
  until?: Maybe<Scalars["Time"]>
}

type DlnaStatus = {
  __typename?: "DLNAStatus"
  running: Scalars["Boolean"]
  /** If not currently running, time until it will be started. If running, time until it will be stopped */
  until?: Maybe<Scalars["Time"]>
  recentIPAddresses: Array<Scalars["String"]>
  allowedIPAddresses: Array<Dlnaip>
}

type EnableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: Maybe<Scalars["Int"]>
}

type DisableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: Maybe<Scalars["Int"]>
}

type AddTempDlnaipInput = {
  address: Scalars["String"]
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: Maybe<Scalars["Int"]>
}

type RemoveTempDlnaipInput = {
  address: Scalars["String"]
}

type Fingerprint = {
  __typename?: "Fingerprint"
  type: Scalars["String"]
  value: Scalars["String"]
}

type Folder = {
  __typename?: "Folder"
  id: Scalars["ID"]
  path: Scalars["String"]
  parent_folder_id?: Maybe<Scalars["ID"]>
  zip_file_id?: Maybe<Scalars["ID"]>
  mod_time: Scalars["Time"]
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
}

type BaseFile = {
  id: Scalars["ID"]
  path: Scalars["String"]
  basename: Scalars["String"]
  parent_folder_id: Scalars["ID"]
  zip_file_id?: Maybe<Scalars["ID"]>
  mod_time: Scalars["Time"]
  size: Scalars["Int64"]
  fingerprint?: Maybe<Scalars["String"]>
  fingerprints: Array<Fingerprint>
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
}

type BaseFileFingerprintArgs = {
  type: Scalars["String"]
}

type VideoFile = BaseFile & {
  __typename?: "VideoFile"
  id: Scalars["ID"]
  path: Scalars["String"]
  basename: Scalars["String"]
  parent_folder_id: Scalars["ID"]
  zip_file_id?: Maybe<Scalars["ID"]>
  mod_time: Scalars["Time"]
  size: Scalars["Int64"]
  fingerprint?: Maybe<Scalars["String"]>
  fingerprints: Array<Fingerprint>
  format: Scalars["String"]
  width: Scalars["Int"]
  height: Scalars["Int"]
  duration: Scalars["Float"]
  video_codec: Scalars["String"]
  audio_codec: Scalars["String"]
  frame_rate: Scalars["Float"]
  bit_rate: Scalars["Int"]
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
}

type VideoFileFingerprintArgs = {
  type: Scalars["String"]
}

type ImageFile = BaseFile & {
  __typename?: "ImageFile"
  id: Scalars["ID"]
  path: Scalars["String"]
  basename: Scalars["String"]
  parent_folder_id: Scalars["ID"]
  zip_file_id?: Maybe<Scalars["ID"]>
  mod_time: Scalars["Time"]
  size: Scalars["Int64"]
  fingerprint?: Maybe<Scalars["String"]>
  fingerprints: Array<Fingerprint>
  width: Scalars["Int"]
  height: Scalars["Int"]
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
}

type ImageFileFingerprintArgs = {
  type: Scalars["String"]
}

type VisualFile = VideoFile | ImageFile

type GalleryFile = BaseFile & {
  __typename?: "GalleryFile"
  id: Scalars["ID"]
  path: Scalars["String"]
  basename: Scalars["String"]
  parent_folder_id: Scalars["ID"]
  zip_file_id?: Maybe<Scalars["ID"]>
  mod_time: Scalars["Time"]
  size: Scalars["Int64"]
  fingerprint?: Maybe<Scalars["String"]>
  fingerprints: Array<Fingerprint>
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
}

type GalleryFileFingerprintArgs = {
  type: Scalars["String"]
}

type MoveFilesInput = {
  ids: Array<Scalars["ID"]>
  /** valid for single or multiple file ids */
  destination_folder?: Maybe<Scalars["String"]>
  /** valid for single or multiple file ids */
  destination_folder_id?: Maybe<Scalars["ID"]>
  /** valid only for single file id. If empty, existing basename is used */
  destination_basename?: Maybe<Scalars["String"]>
}

type SetFingerprintsInput = {
  type: Scalars["String"]
  /** an null value will remove the fingerprint */
  value?: Maybe<Scalars["String"]>
}

type FileSetFingerprintsInput = {
  id: Scalars["ID"]
  /** only supplied fingerprint types will be modified */
  fingerprints: Array<SetFingerprintsInput>
}

enum SortDirectionEnum {
  Asc = "ASC",
  Desc = "DESC"
}

type FindFilterType = {
  q?: Maybe<Scalars["String"]>
  page?: Maybe<Scalars["Int"]>
  /** use per_page = -1 to indicate all results. Defaults to 25. */
  per_page?: Maybe<Scalars["Int"]>
  sort?: Maybe<Scalars["String"]>
  direction?: Maybe<SortDirectionEnum>
}

type SavedFindFilterType = {
  __typename?: "SavedFindFilterType"
  q?: Maybe<Scalars["String"]>
  page?: Maybe<Scalars["Int"]>
  /** use per_page = -1 to indicate all results. Defaults to 25. */
  per_page?: Maybe<Scalars["Int"]>
  sort?: Maybe<Scalars["String"]>
  direction?: Maybe<SortDirectionEnum>
}

enum ResolutionEnum {
  /** 144p */
  VeryLow = "VERY_LOW",
  /** 240p */
  Low = "LOW",
  /** 360p */
  R360P = "R360P",
  /** 480p */
  Standard = "STANDARD",
  /** 540p */
  WebHd = "WEB_HD",
  /** 720p */
  StandardHd = "STANDARD_HD",
  /** 1080p */
  FullHd = "FULL_HD",
  /** 1440p */
  QuadHd = "QUAD_HD",
  /** 1920p */
  VrHd = "VR_HD",
  /** 4K */
  FourK = "FOUR_K",
  /** 5K */
  FiveK = "FIVE_K",
  /** 6K */
  SixK = "SIX_K",
  /** 7K */
  SevenK = "SEVEN_K",
  /** 8K */
  EightK = "EIGHT_K",
  /** 8K+ */
  Huge = "HUGE"
}

type ResolutionCriterionInput = {
  value: ResolutionEnum
  modifier: CriterionModifier
}

enum OrientationEnum {
  /** Landscape */
  Landscape = "LANDSCAPE",
  /** Portrait */
  Portrait = "PORTRAIT",
  /** Square */
  Square = "SQUARE"
}

type OrientationCriterionInput = {
  value: Array<OrientationEnum>
}

type PHashDuplicationCriterionInput = {
  duplicated?: Maybe<Scalars["Boolean"]>
  /** Currently unimplemented */
  distance?: Maybe<Scalars["Int"]>
}

type StashIdCriterionInput = {
  /**
   * If present, this value is treated as a predicate.
   * That is, it will filter based on stash_ids with the matching endpoint
   */
  endpoint?: Maybe<Scalars["String"]>
  stash_id?: Maybe<Scalars["String"]>
  modifier: CriterionModifier
}

type PerformerFilterType = {
  AND?: Maybe<PerformerFilterType>
  OR?: Maybe<PerformerFilterType>
  NOT?: Maybe<PerformerFilterType>
  name?: Maybe<StringCriterionInput>
  disambiguation?: Maybe<StringCriterionInput>
  details?: Maybe<StringCriterionInput>
  /** Filter by favorite */
  filter_favorites?: Maybe<Scalars["Boolean"]>
  /** Filter by birth year */
  birth_year?: Maybe<IntCriterionInput>
  /** Filter by age */
  age?: Maybe<IntCriterionInput>
  /** Filter by ethnicity */
  ethnicity?: Maybe<StringCriterionInput>
  /** Filter by country */
  country?: Maybe<StringCriterionInput>
  /** Filter by eye color */
  eye_color?: Maybe<StringCriterionInput>
  /** Filter by height in cm */
  height_cm?: Maybe<IntCriterionInput>
  /** Filter by measurements */
  measurements?: Maybe<StringCriterionInput>
  /** Filter by fake tits value */
  fake_tits?: Maybe<StringCriterionInput>
  /** Filter by penis length value */
  penis_length?: Maybe<FloatCriterionInput>
  /** Filter by ciricumcision */
  circumcised?: Maybe<CircumcisionCriterionInput>
  /** Filter by career length */
  career_length?: Maybe<StringCriterionInput>
  /** Filter by tattoos */
  tattoos?: Maybe<StringCriterionInput>
  /** Filter by piercings */
  piercings?: Maybe<StringCriterionInput>
  /** Filter by aliases */
  aliases?: Maybe<StringCriterionInput>
  /** Filter by gender */
  gender?: Maybe<GenderCriterionInput>
  /** Filter to only include performers missing this property */
  is_missing?: Maybe<Scalars["String"]>
  /** Filter to only include performers with these tags */
  tags?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: Maybe<IntCriterionInput>
  /** Filter by scene count */
  scene_count?: Maybe<IntCriterionInput>
  /** Filter by image count */
  image_count?: Maybe<IntCriterionInput>
  /** Filter by gallery count */
  gallery_count?: Maybe<IntCriterionInput>
  /** Filter by play count */
  play_count?: Maybe<IntCriterionInput>
  /** Filter by o count */
  o_counter?: Maybe<IntCriterionInput>
  /** Filter by StashID */
  stash_id_endpoint?: Maybe<StashIdCriterionInput>
  rating100?: Maybe<IntCriterionInput>
  /** Filter by url */
  url?: Maybe<StringCriterionInput>
  /** Filter by hair color */
  hair_color?: Maybe<StringCriterionInput>
  /** Filter by weight */
  weight?: Maybe<IntCriterionInput>
  /** Filter by death year */
  death_year?: Maybe<IntCriterionInput>
  /** Filter by studios where performer appears in scene/image/gallery */
  studios?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter by performers where performer appears with another performer in scene/image/gallery */
  performers?: Maybe<MultiCriterionInput>
  /** Filter by autotag ignore value */
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
  /** Filter by birthdate */
  birthdate?: Maybe<DateCriterionInput>
  /** Filter by death date */
  death_date?: Maybe<DateCriterionInput>
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: Maybe<SceneFilterType>
  /** Filter by related images that meet this criteria */
  images_filter?: Maybe<ImageFilterType>
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: Maybe<GalleryFilterType>
  /** Filter by related tags that meet this criteria */
  tags_filter?: Maybe<TagFilterType>
  /** Filter by creation time */
  created_at?: Maybe<TimestampCriterionInput>
  /** Filter by last update time */
  updated_at?: Maybe<TimestampCriterionInput>
}

type SceneMarkerFilterType = {
  /** Filter to only include scene markers with these tags */
  tags?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter to only include scene markers attached to a scene with these tags */
  scene_tags?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter to only include scene markers with these performers */
  performers?: Maybe<MultiCriterionInput>
  /** Filter by creation time */
  created_at?: Maybe<TimestampCriterionInput>
  /** Filter by last update time */
  updated_at?: Maybe<TimestampCriterionInput>
  /** Filter by scene date */
  scene_date?: Maybe<DateCriterionInput>
  /** Filter by cscene reation time */
  scene_created_at?: Maybe<TimestampCriterionInput>
  /** Filter by lscene ast update time */
  scene_updated_at?: Maybe<TimestampCriterionInput>
  /** Filter by related scenes that meet this criteria */
  scene_filter?: Maybe<SceneFilterType>
}

type SceneFilterType = {
  AND?: Maybe<SceneFilterType>
  OR?: Maybe<SceneFilterType>
  NOT?: Maybe<SceneFilterType>
  id?: Maybe<IntCriterionInput>
  title?: Maybe<StringCriterionInput>
  code?: Maybe<StringCriterionInput>
  details?: Maybe<StringCriterionInput>
  director?: Maybe<StringCriterionInput>
  /** Filter by file oshash */
  oshash?: Maybe<StringCriterionInput>
  /** Filter by file checksum */
  checksum?: Maybe<StringCriterionInput>
  /** Filter by file phash */
  phash?: Maybe<StringCriterionInput>
  /** Filter by file phash distance */
  phash_distance?: Maybe<PhashDistanceCriterionInput>
  /** Filter by path */
  path?: Maybe<StringCriterionInput>
  /** Filter by file count */
  file_count?: Maybe<IntCriterionInput>
  rating100?: Maybe<IntCriterionInput>
  /** Filter by organized */
  organized?: Maybe<Scalars["Boolean"]>
  /** Filter by o-counter */
  o_counter?: Maybe<IntCriterionInput>
  /** Filter Scenes that have an exact phash match available */
  duplicated?: Maybe<PHashDuplicationCriterionInput>
  /** Filter by resolution */
  resolution?: Maybe<ResolutionCriterionInput>
  /** Filter by orientation */
  orientation?: Maybe<OrientationCriterionInput>
  /** Filter by frame rate */
  framerate?: Maybe<IntCriterionInput>
  /** Filter by bit rate */
  bitrate?: Maybe<IntCriterionInput>
  /** Filter by video codec */
  video_codec?: Maybe<StringCriterionInput>
  /** Filter by audio codec */
  audio_codec?: Maybe<StringCriterionInput>
  /** Filter by duration (in seconds) */
  duration?: Maybe<IntCriterionInput>
  /** Filter to only include scenes which have markers. `true` or `false` */
  has_markers?: Maybe<Scalars["String"]>
  /** Filter to only include scenes missing this property */
  is_missing?: Maybe<Scalars["String"]>
  /** Filter to only include scenes with this studio */
  studios?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter to only include scenes with this movie */
  movies?: Maybe<MultiCriterionInput>
  /** Filter to only include scenes with this gallery */
  galleries?: Maybe<MultiCriterionInput>
  /** Filter to only include scenes with these tags */
  tags?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: Maybe<IntCriterionInput>
  /** Filter to only include scenes with performers with these tags */
  performer_tags?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter scenes that have performers that have been favorited */
  performer_favorite?: Maybe<Scalars["Boolean"]>
  /** Filter scenes by performer age at time of scene */
  performer_age?: Maybe<IntCriterionInput>
  /** Filter to only include scenes with these performers */
  performers?: Maybe<MultiCriterionInput>
  /** Filter by performer count */
  performer_count?: Maybe<IntCriterionInput>
  /** Filter by StashID */
  stash_id_endpoint?: Maybe<StashIdCriterionInput>
  /** Filter by url */
  url?: Maybe<StringCriterionInput>
  /** Filter by interactive */
  interactive?: Maybe<Scalars["Boolean"]>
  /** Filter by InteractiveSpeed */
  interactive_speed?: Maybe<IntCriterionInput>
  /** Filter by captions */
  captions?: Maybe<StringCriterionInput>
  /** Filter by resume time */
  resume_time?: Maybe<IntCriterionInput>
  /** Filter by play count */
  play_count?: Maybe<IntCriterionInput>
  /** Filter by play duration (in seconds) */
  play_duration?: Maybe<IntCriterionInput>
  /** Filter by scene last played time */
  last_played_at?: Maybe<TimestampCriterionInput>
  /** Filter by date */
  date?: Maybe<DateCriterionInput>
  /** Filter by creation time */
  created_at?: Maybe<TimestampCriterionInput>
  /** Filter by last update time */
  updated_at?: Maybe<TimestampCriterionInput>
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: Maybe<GalleryFilterType>
  /** Filter by related performers that meet this criteria */
  performers_filter?: Maybe<PerformerFilterType>
  /** Filter by related studios that meet this criteria */
  studios_filter?: Maybe<StudioFilterType>
  /** Filter by related tags that meet this criteria */
  tags_filter?: Maybe<TagFilterType>
  /** Filter by related movies that meet this criteria */
  movies_filter?: Maybe<MovieFilterType>
  /** Filter by related markers that meet this criteria */
  markers_filter?: Maybe<SceneMarkerFilterType>
}

type MovieFilterType = {
  AND?: Maybe<MovieFilterType>
  OR?: Maybe<MovieFilterType>
  NOT?: Maybe<MovieFilterType>
  name?: Maybe<StringCriterionInput>
  director?: Maybe<StringCriterionInput>
  synopsis?: Maybe<StringCriterionInput>
  /** Filter by duration (in seconds) */
  duration?: Maybe<IntCriterionInput>
  rating100?: Maybe<IntCriterionInput>
  /** Filter to only include movies with this studio */
  studios?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter to only include movies missing this property */
  is_missing?: Maybe<Scalars["String"]>
  /** Filter by url */
  url?: Maybe<StringCriterionInput>
  /** Filter to only include movies where performer appears in a scene */
  performers?: Maybe<MultiCriterionInput>
  /** Filter by date */
  date?: Maybe<DateCriterionInput>
  /** Filter by creation time */
  created_at?: Maybe<TimestampCriterionInput>
  /** Filter by last update time */
  updated_at?: Maybe<TimestampCriterionInput>
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: Maybe<SceneFilterType>
  /** Filter by related studios that meet this criteria */
  studios_filter?: Maybe<StudioFilterType>
}

type StudioFilterType = {
  AND?: Maybe<StudioFilterType>
  OR?: Maybe<StudioFilterType>
  NOT?: Maybe<StudioFilterType>
  name?: Maybe<StringCriterionInput>
  details?: Maybe<StringCriterionInput>
  /** Filter to only include studios with this parent studio */
  parents?: Maybe<MultiCriterionInput>
  /** Filter by StashID */
  stash_id_endpoint?: Maybe<StashIdCriterionInput>
  /** Filter to only include studios missing this property */
  is_missing?: Maybe<Scalars["String"]>
  rating100?: Maybe<IntCriterionInput>
  /** Filter by favorite */
  favorite?: Maybe<Scalars["Boolean"]>
  /** Filter by scene count */
  scene_count?: Maybe<IntCriterionInput>
  /** Filter by image count */
  image_count?: Maybe<IntCriterionInput>
  /** Filter by gallery count */
  gallery_count?: Maybe<IntCriterionInput>
  /** Filter by url */
  url?: Maybe<StringCriterionInput>
  /** Filter by studio aliases */
  aliases?: Maybe<StringCriterionInput>
  /** Filter by subsidiary studio count */
  child_count?: Maybe<IntCriterionInput>
  /** Filter by autotag ignore value */
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: Maybe<SceneFilterType>
  /** Filter by related images that meet this criteria */
  images_filter?: Maybe<ImageFilterType>
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: Maybe<GalleryFilterType>
  /** Filter by creation time */
  created_at?: Maybe<TimestampCriterionInput>
  /** Filter by last update time */
  updated_at?: Maybe<TimestampCriterionInput>
}

type GalleryFilterType = {
  AND?: Maybe<GalleryFilterType>
  OR?: Maybe<GalleryFilterType>
  NOT?: Maybe<GalleryFilterType>
  id?: Maybe<IntCriterionInput>
  title?: Maybe<StringCriterionInput>
  details?: Maybe<StringCriterionInput>
  /** Filter by file checksum */
  checksum?: Maybe<StringCriterionInput>
  /** Filter by path */
  path?: Maybe<StringCriterionInput>
  /** Filter by zip-file count */
  file_count?: Maybe<IntCriterionInput>
  /** Filter to only include galleries missing this property */
  is_missing?: Maybe<Scalars["String"]>
  /** Filter to include/exclude galleries that were created from zip */
  is_zip?: Maybe<Scalars["Boolean"]>
  rating100?: Maybe<IntCriterionInput>
  /** Filter by organized */
  organized?: Maybe<Scalars["Boolean"]>
  /** Filter by average image resolution */
  average_resolution?: Maybe<ResolutionCriterionInput>
  /** Filter to only include galleries that have chapters. `true` or `false` */
  has_chapters?: Maybe<Scalars["String"]>
  /** Filter to only include galleries with these scenes */
  scenes?: Maybe<MultiCriterionInput>
  /** Filter to only include galleries with this studio */
  studios?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter to only include galleries with these tags */
  tags?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: Maybe<IntCriterionInput>
  /** Filter to only include galleries with performers with these tags */
  performer_tags?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter to only include galleries with these performers */
  performers?: Maybe<MultiCriterionInput>
  /** Filter by performer count */
  performer_count?: Maybe<IntCriterionInput>
  /** Filter galleries that have performers that have been favorited */
  performer_favorite?: Maybe<Scalars["Boolean"]>
  /** Filter galleries by performer age at time of gallery */
  performer_age?: Maybe<IntCriterionInput>
  /** Filter by number of images in this gallery */
  image_count?: Maybe<IntCriterionInput>
  /** Filter by url */
  url?: Maybe<StringCriterionInput>
  /** Filter by date */
  date?: Maybe<DateCriterionInput>
  /** Filter by creation time */
  created_at?: Maybe<TimestampCriterionInput>
  /** Filter by last update time */
  updated_at?: Maybe<TimestampCriterionInput>
  /** Filter by studio code */
  code?: Maybe<StringCriterionInput>
  /** Filter by photographer */
  photographer?: Maybe<StringCriterionInput>
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: Maybe<SceneFilterType>
  /** Filter by related images that meet this criteria */
  images_filter?: Maybe<ImageFilterType>
  /** Filter by related performers that meet this criteria */
  performers_filter?: Maybe<PerformerFilterType>
  /** Filter by related studios that meet this criteria */
  studios_filter?: Maybe<StudioFilterType>
  /** Filter by related tags that meet this criteria */
  tags_filter?: Maybe<TagFilterType>
}

type TagFilterType = {
  AND?: Maybe<TagFilterType>
  OR?: Maybe<TagFilterType>
  NOT?: Maybe<TagFilterType>
  /** Filter by tag name */
  name?: Maybe<StringCriterionInput>
  /** Filter by tag aliases */
  aliases?: Maybe<StringCriterionInput>
  /** Filter by favorite */
  favorite?: Maybe<Scalars["Boolean"]>
  /** Filter by tag description */
  description?: Maybe<StringCriterionInput>
  /** Filter to only include tags missing this property */
  is_missing?: Maybe<Scalars["String"]>
  /** Filter by number of scenes with this tag */
  scene_count?: Maybe<IntCriterionInput>
  /** Filter by number of images with this tag */
  image_count?: Maybe<IntCriterionInput>
  /** Filter by number of galleries with this tag */
  gallery_count?: Maybe<IntCriterionInput>
  /** Filter by number of performers with this tag */
  performer_count?: Maybe<IntCriterionInput>
  /** Filter by number of markers with this tag */
  marker_count?: Maybe<IntCriterionInput>
  /** Filter by parent tags */
  parents?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter by child tags */
  children?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter by number of parent tags the tag has */
  parent_count?: Maybe<IntCriterionInput>
  /** Filter by number f child tags the tag has */
  child_count?: Maybe<IntCriterionInput>
  /** Filter by autotag ignore value */
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: Maybe<SceneFilterType>
  /** Filter by related images that meet this criteria */
  images_filter?: Maybe<ImageFilterType>
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: Maybe<GalleryFilterType>
  /** Filter by creation time */
  created_at?: Maybe<TimestampCriterionInput>
  /** Filter by last update time */
  updated_at?: Maybe<TimestampCriterionInput>
}

type ImageFilterType = {
  AND?: Maybe<ImageFilterType>
  OR?: Maybe<ImageFilterType>
  NOT?: Maybe<ImageFilterType>
  title?: Maybe<StringCriterionInput>
  details?: Maybe<StringCriterionInput>
  /**  Filter by image id */
  id?: Maybe<IntCriterionInput>
  /** Filter by file checksum */
  checksum?: Maybe<StringCriterionInput>
  /** Filter by path */
  path?: Maybe<StringCriterionInput>
  /** Filter by file count */
  file_count?: Maybe<IntCriterionInput>
  rating100?: Maybe<IntCriterionInput>
  /** Filter by date */
  date?: Maybe<DateCriterionInput>
  /** Filter by url */
  url?: Maybe<StringCriterionInput>
  /** Filter by organized */
  organized?: Maybe<Scalars["Boolean"]>
  /** Filter by o-counter */
  o_counter?: Maybe<IntCriterionInput>
  /** Filter by resolution */
  resolution?: Maybe<ResolutionCriterionInput>
  /** Filter by orientation */
  orientation?: Maybe<OrientationCriterionInput>
  /** Filter to only include images missing this property */
  is_missing?: Maybe<Scalars["String"]>
  /** Filter to only include images with this studio */
  studios?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter to only include images with these tags */
  tags?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: Maybe<IntCriterionInput>
  /** Filter to only include images with performers with these tags */
  performer_tags?: Maybe<HierarchicalMultiCriterionInput>
  /** Filter to only include images with these performers */
  performers?: Maybe<MultiCriterionInput>
  /** Filter by performer count */
  performer_count?: Maybe<IntCriterionInput>
  /** Filter images that have performers that have been favorited */
  performer_favorite?: Maybe<Scalars["Boolean"]>
  /** Filter images by performer age at time of image */
  performer_age?: Maybe<IntCriterionInput>
  /** Filter to only include images with these galleries */
  galleries?: Maybe<MultiCriterionInput>
  /** Filter by creation time */
  created_at?: Maybe<TimestampCriterionInput>
  /** Filter by last update time */
  updated_at?: Maybe<TimestampCriterionInput>
  /** Filter by studio code */
  code?: Maybe<StringCriterionInput>
  /** Filter by photographer */
  photographer?: Maybe<StringCriterionInput>
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: Maybe<GalleryFilterType>
  /** Filter by related performers that meet this criteria */
  performers_filter?: Maybe<PerformerFilterType>
  /** Filter by related studios that meet this criteria */
  studios_filter?: Maybe<StudioFilterType>
  /** Filter by related tags that meet this criteria */
  tags_filter?: Maybe<TagFilterType>
}

const enum CriterionModifier {
  /** = */
  Equals = "EQUALS",
  /** != */
  NotEquals = "NOT_EQUALS",
  /** > */
  GreaterThan = "GREATER_THAN",
  /** < */
  LessThan = "LESS_THAN",
  /** IS NULL */
  IsNull = "IS_NULL",
  /** IS NOT NULL */
  NotNull = "NOT_NULL",
  /** INCLUDES ALL */
  IncludesAll = "INCLUDES_ALL",
  Includes = "INCLUDES",
  Excludes = "EXCLUDES",
  /** MATCHES REGEX */
  MatchesRegex = "MATCHES_REGEX",
  /** NOT MATCHES REGEX */
  NotMatchesRegex = "NOT_MATCHES_REGEX",
  /** >= AND <= */
  Between = "BETWEEN",
  /** < OR > */
  NotBetween = "NOT_BETWEEN"
}

type StringCriterionInput = {
  value: Scalars["String"]
  modifier: CriterionModifier
}

type IntCriterionInput = {
  value: Scalars["Int"]
  value2?: Maybe<Scalars["Int"]>
  modifier: CriterionModifier
}

type FloatCriterionInput = {
  value: Scalars["Float"]
  value2?: Maybe<Scalars["Float"]>
  modifier: CriterionModifier
}

type MultiCriterionInput = {
  value?: Maybe<Array<Scalars["ID"]>>
  modifier: CriterionModifier
  excludes?: Maybe<Array<Scalars["ID"]>>
}

type GenderCriterionInput = {
  value?: Maybe<GenderEnum>
  value_list?: Maybe<Array<GenderEnum>>
  modifier: CriterionModifier
}

type CircumcisionCriterionInput = {
  value?: Maybe<Array<CircumisedEnum>>
  modifier: CriterionModifier
}

type HierarchicalMultiCriterionInput = {
  value?: Maybe<Array<Scalars["ID"]>>
  modifier: CriterionModifier
  depth?: Maybe<Scalars["Int"]>
  excludes?: Maybe<Array<Scalars["ID"]>>
}

type DateCriterionInput = {
  value: Scalars["String"]
  value2?: Maybe<Scalars["String"]>
  modifier: CriterionModifier
}

type TimestampCriterionInput = {
  value: Scalars["String"]
  value2?: Maybe<Scalars["String"]>
  modifier: CriterionModifier
}

type PhashDistanceCriterionInput = {
  value: Scalars["String"]
  modifier: CriterionModifier
  distance?: Maybe<Scalars["Int"]>
}

enum FilterMode {
  Scenes = "SCENES",
  Performers = "PERFORMERS",
  Studios = "STUDIOS",
  Galleries = "GALLERIES",
  SceneMarkers = "SCENE_MARKERS",
  Movies = "MOVIES",
  Tags = "TAGS",
  Images = "IMAGES"
}

type SavedFilter = {
  __typename?: "SavedFilter"
  id: Scalars["ID"]
  mode: FilterMode
  name: Scalars["String"]
  /**
   * JSON-encoded filter string
   * @deprecated use find_filter and object_filter instead
   */
  filter: Scalars["String"]
  find_filter?: Maybe<SavedFindFilterType>
  object_filter?: Maybe<Scalars["Map"]>
  ui_options?: Maybe<Scalars["Map"]>
}

type SaveFilterInput = {
  /** provide ID to overwrite existing filter */
  id?: Maybe<Scalars["ID"]>
  mode: FilterMode
  name: Scalars["String"]
  find_filter?: Maybe<FindFilterType>
  object_filter?: Maybe<Scalars["Map"]>
  ui_options?: Maybe<Scalars["Map"]>
}

type DestroyFilterInput = {
  id: Scalars["ID"]
}

type SetDefaultFilterInput = {
  mode: FilterMode
  /** null to clear */
  find_filter?: Maybe<FindFilterType>
  object_filter?: Maybe<Scalars["Map"]>
  ui_options?: Maybe<Scalars["Map"]>
}

type GalleryChapter = {
  __typename?: "GalleryChapter"
  id: Scalars["ID"]
  gallery: Gallery
  title: Scalars["String"]
  image_index: Scalars["Int"]
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
}

type GalleryChapterCreateInput = {
  gallery_id: Scalars["ID"]
  title: Scalars["String"]
  image_index: Scalars["Int"]
}

type GalleryChapterUpdateInput = {
  id: Scalars["ID"]
  gallery_id?: Maybe<Scalars["ID"]>
  title?: Maybe<Scalars["String"]>
  image_index?: Maybe<Scalars["Int"]>
}

type FindGalleryChaptersResultType = {
  __typename?: "FindGalleryChaptersResultType"
  count: Scalars["Int"]
  chapters: Array<GalleryChapter>
}

/** Gallery type */
type Gallery = {
  __typename?: "Gallery"
  id: Scalars["ID"]
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  /** @deprecated Use urls */
  url?: Maybe<Scalars["String"]>
  urls: Array<Scalars["String"]>
  date?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  photographer?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  organized: Scalars["Boolean"]
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
  files: Array<GalleryFile>
  folder?: Maybe<Folder>
  chapters: Array<GalleryChapter>
  scenes: Array<Scene>
  studio?: Maybe<Studio>
  image_count: Scalars["Int"]
  tags: Array<Tag>
  performers: Array<Performer>
  cover?: Maybe<Image>
}

type GalleryCreateInput = {
  title: Scalars["String"]
  code?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  date?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  photographer?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  organized?: Maybe<Scalars["Boolean"]>
  scene_ids?: Maybe<Array<Scalars["ID"]>>
  studio_id?: Maybe<Scalars["ID"]>
  tag_ids?: Maybe<Array<Scalars["ID"]>>
  performer_ids?: Maybe<Array<Scalars["ID"]>>
}

type GalleryUpdateInput = {
  clientMutationId?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  date?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  photographer?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  organized?: Maybe<Scalars["Boolean"]>
  scene_ids?: Maybe<Array<Scalars["ID"]>>
  studio_id?: Maybe<Scalars["ID"]>
  tag_ids?: Maybe<Array<Scalars["ID"]>>
  performer_ids?: Maybe<Array<Scalars["ID"]>>
  primary_file_id?: Maybe<Scalars["ID"]>
}

type BulkGalleryUpdateInput = {
  clientMutationId?: Maybe<Scalars["String"]>
  ids?: Maybe<Array<Scalars["ID"]>>
  code?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<BulkUpdateStrings>
  date?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  photographer?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  organized?: Maybe<Scalars["Boolean"]>
  scene_ids?: Maybe<BulkUpdateIds>
  studio_id?: Maybe<Scalars["ID"]>
  tag_ids?: Maybe<BulkUpdateIds>
  performer_ids?: Maybe<BulkUpdateIds>
}

type GalleryDestroyInput = {
  ids: Array<Scalars["ID"]>
  /**
   * If true, then the zip file will be deleted if the gallery is zip-file-based.
   * If gallery is folder-based, then any files not associated with other
   * galleries will be deleted, along with the folder, if it is not empty.
   */
  delete_file?: Maybe<Scalars["Boolean"]>
  delete_generated?: Maybe<Scalars["Boolean"]>
}

type FindGalleriesResultType = {
  __typename?: "FindGalleriesResultType"
  count: Scalars["Int"]
  galleries: Array<Gallery>
}

type GalleryAddInput = {
  gallery_id: Scalars["ID"]
  image_ids: Array<Scalars["ID"]>
}

type GalleryRemoveInput = {
  gallery_id: Scalars["ID"]
  image_ids: Array<Scalars["ID"]>
}

type Image = {
  __typename?: "Image"
  id: Scalars["ID"]
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  /** @deprecated Use urls */
  url?: Maybe<Scalars["String"]>
  urls: Array<Scalars["String"]>
  date?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  photographer?: Maybe<Scalars["String"]>
  o_counter?: Maybe<Scalars["Int"]>
  organized: Scalars["Boolean"]
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
  /** @deprecated Use visual_files */
  files: Array<ImageFile>
  visual_files: Array<VisualFile>
  paths: ImagePathsType
  galleries: Array<Gallery>
  studio?: Maybe<Studio>
  tags: Array<Tag>
  performers: Array<Performer>
}

type ImageFileType = {
  __typename?: "ImageFileType"
  mod_time: Scalars["Time"]
  size: Scalars["Int"]
  width: Scalars["Int"]
  height: Scalars["Int"]
}

type ImagePathsType = {
  __typename?: "ImagePathsType"
  thumbnail?: Maybe<Scalars["String"]>
  preview?: Maybe<Scalars["String"]>
  image?: Maybe<Scalars["String"]>
}

type ImageUpdateInput = {
  clientMutationId?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  organized?: Maybe<Scalars["Boolean"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  date?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  photographer?: Maybe<Scalars["String"]>
  studio_id?: Maybe<Scalars["ID"]>
  performer_ids?: Maybe<Array<Scalars["ID"]>>
  tag_ids?: Maybe<Array<Scalars["ID"]>>
  gallery_ids?: Maybe<Array<Scalars["ID"]>>
  primary_file_id?: Maybe<Scalars["ID"]>
}

type BulkImageUpdateInput = {
  clientMutationId?: Maybe<Scalars["String"]>
  ids?: Maybe<Array<Scalars["ID"]>>
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  organized?: Maybe<Scalars["Boolean"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<BulkUpdateStrings>
  date?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  photographer?: Maybe<Scalars["String"]>
  studio_id?: Maybe<Scalars["ID"]>
  performer_ids?: Maybe<BulkUpdateIds>
  tag_ids?: Maybe<BulkUpdateIds>
  gallery_ids?: Maybe<BulkUpdateIds>
}

type ImageDestroyInput = {
  id: Scalars["ID"]
  delete_file?: Maybe<Scalars["Boolean"]>
  delete_generated?: Maybe<Scalars["Boolean"]>
}

type ImagesDestroyInput = {
  ids: Array<Scalars["ID"]>
  delete_file?: Maybe<Scalars["Boolean"]>
  delete_generated?: Maybe<Scalars["Boolean"]>
}

type FindImagesResultType = {
  __typename?: "FindImagesResultType"
  count: Scalars["Int"]
  /** Total megapixels of the images */
  megapixels: Scalars["Float"]
  /** Total file size in bytes */
  filesize: Scalars["Float"]
  images: Array<Image>
}

enum JobStatus {
  Ready = "READY",
  Running = "RUNNING",
  Finished = "FINISHED",
  Stopping = "STOPPING",
  Cancelled = "CANCELLED",
  Failed = "FAILED"
}

type Job = {
  __typename?: "Job"
  id: Scalars["ID"]
  status: JobStatus
  subTasks?: Maybe<Array<Scalars["String"]>>
  description: Scalars["String"]
  progress?: Maybe<Scalars["Float"]>
  startTime?: Maybe<Scalars["Time"]>
  endTime?: Maybe<Scalars["Time"]>
  addTime: Scalars["Time"]
  error?: Maybe<Scalars["String"]>
}

type FindJobInput = {
  id: Scalars["ID"]
}

enum JobStatusUpdateType {
  Add = "ADD",
  Remove = "REMOVE",
  Update = "UPDATE"
}

type JobStatusUpdate = {
  __typename?: "JobStatusUpdate"
  type: JobStatusUpdateType
  job: Job
}

enum LogLevel {
  Trace = "Trace",
  Debug = "Debug",
  Info = "Info",
  Progress = "Progress",
  Warning = "Warning",
  Error = "Error"
}

type LogEntry = {
  __typename?: "LogEntry"
  time: Scalars["Time"]
  level: LogLevel
  message: Scalars["String"]
}

type GenerateMetadataInput = {
  covers?: Maybe<Scalars["Boolean"]>
  sprites?: Maybe<Scalars["Boolean"]>
  previews?: Maybe<Scalars["Boolean"]>
  imagePreviews?: Maybe<Scalars["Boolean"]>
  previewOptions?: Maybe<GeneratePreviewOptionsInput>
  markers?: Maybe<Scalars["Boolean"]>
  markerImagePreviews?: Maybe<Scalars["Boolean"]>
  markerScreenshots?: Maybe<Scalars["Boolean"]>
  transcodes?: Maybe<Scalars["Boolean"]>
  /** Generate transcodes even if not required */
  forceTranscodes?: Maybe<Scalars["Boolean"]>
  phashes?: Maybe<Scalars["Boolean"]>
  interactiveHeatmapsSpeeds?: Maybe<Scalars["Boolean"]>
  imageThumbnails?: Maybe<Scalars["Boolean"]>
  clipPreviews?: Maybe<Scalars["Boolean"]>
  /** scene ids to generate for */
  sceneIDs?: Maybe<Array<Scalars["ID"]>>
  /** marker ids to generate for */
  markerIDs?: Maybe<Array<Scalars["ID"]>>
  /** overwrite existing media */
  overwrite?: Maybe<Scalars["Boolean"]>
}

type GeneratePreviewOptionsInput = {
  /** Number of segments in a preview file */
  previewSegments?: Maybe<Scalars["Int"]>
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: Maybe<Scalars["Float"]>
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: Maybe<Scalars["String"]>
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: Maybe<Scalars["String"]>
  /** Preset when generating preview */
  previewPreset?: Maybe<PreviewPreset>
}

type GenerateMetadataOptions = {
  __typename?: "GenerateMetadataOptions"
  covers?: Maybe<Scalars["Boolean"]>
  sprites?: Maybe<Scalars["Boolean"]>
  previews?: Maybe<Scalars["Boolean"]>
  imagePreviews?: Maybe<Scalars["Boolean"]>
  previewOptions?: Maybe<GeneratePreviewOptions>
  markers?: Maybe<Scalars["Boolean"]>
  markerImagePreviews?: Maybe<Scalars["Boolean"]>
  markerScreenshots?: Maybe<Scalars["Boolean"]>
  transcodes?: Maybe<Scalars["Boolean"]>
  phashes?: Maybe<Scalars["Boolean"]>
  interactiveHeatmapsSpeeds?: Maybe<Scalars["Boolean"]>
  imageThumbnails?: Maybe<Scalars["Boolean"]>
  clipPreviews?: Maybe<Scalars["Boolean"]>
}

type GeneratePreviewOptions = {
  __typename?: "GeneratePreviewOptions"
  /** Number of segments in a preview file */
  previewSegments?: Maybe<Scalars["Int"]>
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: Maybe<Scalars["Float"]>
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: Maybe<Scalars["String"]>
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: Maybe<Scalars["String"]>
  /** Preset when generating preview */
  previewPreset?: Maybe<PreviewPreset>
}

/** Filter options for meta data scannning */
type ScanMetaDataFilterInput = {
  /** If set, files with a modification time before this time point are ignored by the scan */
  minModTime?: Maybe<Scalars["Timestamp"]>
}

type ScanMetadataInput = {
  paths?: Maybe<Array<Scalars["String"]>>
  /** Forces a rescan on files even if modification time is unchanged */
  rescan?: Maybe<Scalars["Boolean"]>
  /** Generate covers during scan */
  scanGenerateCovers?: Maybe<Scalars["Boolean"]>
  /** Generate previews during scan */
  scanGeneratePreviews?: Maybe<Scalars["Boolean"]>
  /** Generate image previews during scan */
  scanGenerateImagePreviews?: Maybe<Scalars["Boolean"]>
  /** Generate sprites during scan */
  scanGenerateSprites?: Maybe<Scalars["Boolean"]>
  /** Generate phashes during scan */
  scanGeneratePhashes?: Maybe<Scalars["Boolean"]>
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails?: Maybe<Scalars["Boolean"]>
  /** Generate image clip previews during scan */
  scanGenerateClipPreviews?: Maybe<Scalars["Boolean"]>
  /** Filter options for the scan */
  filter?: Maybe<ScanMetaDataFilterInput>
}

type ScanMetadataOptions = {
  __typename?: "ScanMetadataOptions"
  /** Forces a rescan on files even if modification time is unchanged */
  rescan: Scalars["Boolean"]
  /** Generate covers during scan */
  scanGenerateCovers: Scalars["Boolean"]
  /** Generate previews during scan */
  scanGeneratePreviews: Scalars["Boolean"]
  /** Generate image previews during scan */
  scanGenerateImagePreviews: Scalars["Boolean"]
  /** Generate sprites during scan */
  scanGenerateSprites: Scalars["Boolean"]
  /** Generate phashes during scan */
  scanGeneratePhashes: Scalars["Boolean"]
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails: Scalars["Boolean"]
  /** Generate image clip previews during scan */
  scanGenerateClipPreviews: Scalars["Boolean"]
}

type CleanMetadataInput = {
  paths?: Maybe<Array<Scalars["String"]>>
  /** Do a dry run. Don't delete any files */
  dryRun: Scalars["Boolean"]
}

type CleanGeneratedInput = {
  /** Clean blob files without blob entries */
  blobFiles?: Maybe<Scalars["Boolean"]>
  /** Clean sprite and vtt files without scene entries */
  sprites?: Maybe<Scalars["Boolean"]>
  /** Clean preview files without scene entries */
  screenshots?: Maybe<Scalars["Boolean"]>
  /** Clean scene transcodes without scene entries */
  transcodes?: Maybe<Scalars["Boolean"]>
  /** Clean marker files without marker entries */
  markers?: Maybe<Scalars["Boolean"]>
  /** Clean image thumbnails/clips without image entries */
  imageThumbnails?: Maybe<Scalars["Boolean"]>
  /** Do a dry run. Don't delete any files */
  dryRun?: Maybe<Scalars["Boolean"]>
}

type AutoTagMetadataInput = {
  /** Paths to tag, null for all files */
  paths?: Maybe<Array<Scalars["String"]>>
  /** IDs of performers to tag files with, or "*" for all */
  performers?: Maybe<Array<Scalars["String"]>>
  /** IDs of studios to tag files with, or "*" for all */
  studios?: Maybe<Array<Scalars["String"]>>
  /** IDs of tags to tag files with, or "*" for all */
  tags?: Maybe<Array<Scalars["String"]>>
}

type AutoTagMetadataOptions = {
  __typename?: "AutoTagMetadataOptions"
  /** IDs of performers to tag files with, or "*" for all */
  performers?: Maybe<Array<Scalars["String"]>>
  /** IDs of studios to tag files with, or "*" for all */
  studios?: Maybe<Array<Scalars["String"]>>
  /** IDs of tags to tag files with, or "*" for all */
  tags?: Maybe<Array<Scalars["String"]>>
}

enum IdentifyFieldStrategy {
  /** Never sets the field value */
  Ignore = "IGNORE",
  /**
   * For multi-value fields, merge with existing.
   * For single-value fields, ignore if already set
   */
  Merge = "MERGE",
  /**
   * Always replaces the value if a value is found.
   * For multi-value fields, any existing values are removed and replaced with the
   * scraped values.
   */
  Overwrite = "OVERWRITE"
}

type IdentifyFieldOptionsInput = {
  field: Scalars["String"]
  strategy: IdentifyFieldStrategy
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: Maybe<Scalars["Boolean"]>
}

type IdentifyMetadataOptionsInput = {
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: Maybe<Array<IdentifyFieldOptionsInput>>
  /** defaults to true if not provided */
  setCoverImage?: Maybe<Scalars["Boolean"]>
  setOrganized?: Maybe<Scalars["Boolean"]>
  /** defaults to true if not provided */
  includeMalePerformers?: Maybe<Scalars["Boolean"]>
  /** defaults to true if not provided */
  skipMultipleMatches?: Maybe<Scalars["Boolean"]>
  /** tag to tag skipped multiple matches with */
  skipMultipleMatchTag?: Maybe<Scalars["String"]>
  /** defaults to true if not provided */
  skipSingleNamePerformers?: Maybe<Scalars["Boolean"]>
  /** tag to tag skipped single name performers with */
  skipSingleNamePerformerTag?: Maybe<Scalars["String"]>
}

type IdentifySourceInput = {
  source: ScraperSourceInput
  /** Options defined for a source override the defaults */
  options?: Maybe<IdentifyMetadataOptionsInput>
}

type IdentifyMetadataInput = {
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySourceInput>
  /** Options defined here override the configured defaults */
  options?: Maybe<IdentifyMetadataOptionsInput>
  /** scene ids to identify */
  sceneIDs?: Maybe<Array<Scalars["ID"]>>
  /** paths of scenes to identify - ignored if scene ids are set */
  paths?: Maybe<Array<Scalars["String"]>>
}

type IdentifyFieldOptions = {
  __typename?: "IdentifyFieldOptions"
  field: Scalars["String"]
  strategy: IdentifyFieldStrategy
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: Maybe<Scalars["Boolean"]>
}

type IdentifyMetadataOptions = {
  __typename?: "IdentifyMetadataOptions"
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: Maybe<Array<IdentifyFieldOptions>>
  /** defaults to true if not provided */
  setCoverImage?: Maybe<Scalars["Boolean"]>
  setOrganized?: Maybe<Scalars["Boolean"]>
  /** defaults to true if not provided */
  includeMalePerformers?: Maybe<Scalars["Boolean"]>
  /** defaults to true if not provided */
  skipMultipleMatches?: Maybe<Scalars["Boolean"]>
  /** tag to tag skipped multiple matches with */
  skipMultipleMatchTag?: Maybe<Scalars["String"]>
  /** defaults to true if not provided */
  skipSingleNamePerformers?: Maybe<Scalars["Boolean"]>
  /** tag to tag skipped single name performers with */
  skipSingleNamePerformerTag?: Maybe<Scalars["String"]>
}

type IdentifySource = {
  __typename?: "IdentifySource"
  source: ScraperSource
  /** Options defined for a source override the defaults */
  options?: Maybe<IdentifyMetadataOptions>
}

type IdentifyMetadataTaskOptions = {
  __typename?: "IdentifyMetadataTaskOptions"
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySource>
  /** Options defined here override the configured defaults */
  options?: Maybe<IdentifyMetadataOptions>
}

type ExportObjectTypeInput = {
  ids?: Maybe<Array<Scalars["String"]>>
  all?: Maybe<Scalars["Boolean"]>
}

type ExportObjectsInput = {
  scenes?: Maybe<ExportObjectTypeInput>
  images?: Maybe<ExportObjectTypeInput>
  studios?: Maybe<ExportObjectTypeInput>
  performers?: Maybe<ExportObjectTypeInput>
  tags?: Maybe<ExportObjectTypeInput>
  movies?: Maybe<ExportObjectTypeInput>
  galleries?: Maybe<ExportObjectTypeInput>
  includeDependencies?: Maybe<Scalars["Boolean"]>
}

enum ImportDuplicateEnum {
  Ignore = "IGNORE",
  Overwrite = "OVERWRITE",
  Fail = "FAIL"
}

enum ImportMissingRefEnum {
  Ignore = "IGNORE",
  Fail = "FAIL",
  Create = "CREATE"
}

type ImportObjectsInput = {
  file: Scalars["Upload"]
  duplicateBehaviour: ImportDuplicateEnum
  missingRefBehaviour: ImportMissingRefEnum
}

type BackupDatabaseInput = {
  download?: Maybe<Scalars["Boolean"]>
}

type AnonymiseDatabaseInput = {
  download?: Maybe<Scalars["Boolean"]>
}

enum SystemStatusEnum {
  Setup = "SETUP",
  NeedsMigration = "NEEDS_MIGRATION",
  Ok = "OK"
}

type SystemStatus = {
  __typename?: "SystemStatus"
  databaseSchema?: Maybe<Scalars["Int"]>
  databasePath?: Maybe<Scalars["String"]>
  configPath?: Maybe<Scalars["String"]>
  appSchema: Scalars["Int"]
  status: SystemStatusEnum
  os: Scalars["String"]
  workingDir: Scalars["String"]
  homeDir: Scalars["String"]
  ffmpegPath?: Maybe<Scalars["String"]>
  ffprobePath?: Maybe<Scalars["String"]>
}

type MigrateInput = {
  backupPath: Scalars["String"]
}

type MigrateSceneScreenshotsInput = {
  deleteFiles?: Maybe<Scalars["Boolean"]>
  overwriteExisting?: Maybe<Scalars["Boolean"]>
}

type MigrateBlobsInput = {
  deleteOld?: Maybe<Scalars["Boolean"]>
}

type Movie = {
  __typename?: "Movie"
  id: Scalars["ID"]
  name: Scalars["String"]
  aliases?: Maybe<Scalars["String"]>
  /** Duration in seconds */
  duration?: Maybe<Scalars["Int"]>
  date?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  studio?: Maybe<Studio>
  director?: Maybe<Scalars["String"]>
  synopsis?: Maybe<Scalars["String"]>
  /** @deprecated Use urls */
  url?: Maybe<Scalars["String"]>
  urls: Array<Scalars["String"]>
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
  front_image_path?: Maybe<Scalars["String"]>
  back_image_path?: Maybe<Scalars["String"]>
  scene_count: Scalars["Int"]
  scenes: Array<Scene>
}

type MovieCreateInput = {
  name: Scalars["String"]
  aliases?: Maybe<Scalars["String"]>
  /** Duration in seconds */
  duration?: Maybe<Scalars["Int"]>
  date?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  studio_id?: Maybe<Scalars["ID"]>
  director?: Maybe<Scalars["String"]>
  synopsis?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  /** This should be a URL or a base64 encoded data URL */
  front_image?: Maybe<Scalars["String"]>
  /** This should be a URL or a base64 encoded data URL */
  back_image?: Maybe<Scalars["String"]>
}

type MovieUpdateInput = {
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  aliases?: Maybe<Scalars["String"]>
  duration?: Maybe<Scalars["Int"]>
  date?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  studio_id?: Maybe<Scalars["ID"]>
  director?: Maybe<Scalars["String"]>
  synopsis?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  /** This should be a URL or a base64 encoded data URL */
  front_image?: Maybe<Scalars["String"]>
  /** This should be a URL or a base64 encoded data URL */
  back_image?: Maybe<Scalars["String"]>
}

type BulkMovieUpdateInput = {
  clientMutationId?: Maybe<Scalars["String"]>
  ids?: Maybe<Array<Scalars["ID"]>>
  rating100?: Maybe<Scalars["Int"]>
  studio_id?: Maybe<Scalars["ID"]>
  director?: Maybe<Scalars["String"]>
  urls?: Maybe<BulkUpdateStrings>
}

type MovieDestroyInput = {
  id: Scalars["ID"]
}

type FindMoviesResultType = {
  __typename?: "FindMoviesResultType"
  count: Scalars["Int"]
  movies: Array<Movie>
}

enum PackageType {
  Scraper = "Scraper",
  Plugin = "Plugin"
}

type Package = {
  __typename?: "Package"
  package_id: Scalars["String"]
  name: Scalars["String"]
  version?: Maybe<Scalars["String"]>
  date?: Maybe<Scalars["Timestamp"]>
  requires: Array<Package>
  sourceURL: Scalars["String"]
  /** The version of this package currently available from the remote source */
  source_package?: Maybe<Package>
  metadata: Scalars["Map"]
}

type PackageSpecInput = {
  id: Scalars["String"]
  sourceURL: Scalars["String"]
}

type PackageSource = {
  __typename?: "PackageSource"
  name?: Maybe<Scalars["String"]>
  url: Scalars["String"]
  local_path?: Maybe<Scalars["String"]>
}

type PackageSourceInput = {
  name?: Maybe<Scalars["String"]>
  url: Scalars["String"]
  local_path?: Maybe<Scalars["String"]>
}

enum GenderEnum {
  Male = "MALE",
  Female = "FEMALE",
  TransgenderMale = "TRANSGENDER_MALE",
  TransgenderFemale = "TRANSGENDER_FEMALE",
  Intersex = "INTERSEX",
  NonBinary = "NON_BINARY"
}

enum CircumisedEnum {
  Cut = "CUT",
  Uncut = "UNCUT"
}

type Performer = {
  __typename?: "Performer"
  id: Scalars["ID"]
  name: Scalars["String"]
  disambiguation?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  gender?: Maybe<GenderEnum>
  twitter?: Maybe<Scalars["String"]>
  instagram?: Maybe<Scalars["String"]>
  birthdate?: Maybe<Scalars["String"]>
  ethnicity?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  eye_color?: Maybe<Scalars["String"]>
  height_cm?: Maybe<Scalars["Int"]>
  measurements?: Maybe<Scalars["String"]>
  fake_tits?: Maybe<Scalars["String"]>
  penis_length?: Maybe<Scalars["Float"]>
  circumcised?: Maybe<CircumisedEnum>
  career_length?: Maybe<Scalars["String"]>
  tattoos?: Maybe<Scalars["String"]>
  piercings?: Maybe<Scalars["String"]>
  alias_list: Array<Scalars["String"]>
  favorite: Scalars["Boolean"]
  tags: Array<Tag>
  ignore_auto_tag: Scalars["Boolean"]
  image_path?: Maybe<Scalars["String"]>
  scene_count: Scalars["Int"]
  image_count: Scalars["Int"]
  gallery_count: Scalars["Int"]
  movie_count: Scalars["Int"]
  performer_count: Scalars["Int"]
  o_counter?: Maybe<Scalars["Int"]>
  scenes: Array<Scene>
  stash_ids: Array<StashId>
  rating100?: Maybe<Scalars["Int"]>
  details?: Maybe<Scalars["String"]>
  death_date?: Maybe<Scalars["String"]>
  hair_color?: Maybe<Scalars["String"]>
  weight?: Maybe<Scalars["Int"]>
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
  movies: Array<Movie>
}

type PerformerCreateInput = {
  name: Scalars["String"]
  disambiguation?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  gender?: Maybe<GenderEnum>
  birthdate?: Maybe<Scalars["String"]>
  ethnicity?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  eye_color?: Maybe<Scalars["String"]>
  height_cm?: Maybe<Scalars["Int"]>
  measurements?: Maybe<Scalars["String"]>
  fake_tits?: Maybe<Scalars["String"]>
  penis_length?: Maybe<Scalars["Float"]>
  circumcised?: Maybe<CircumisedEnum>
  career_length?: Maybe<Scalars["String"]>
  tattoos?: Maybe<Scalars["String"]>
  piercings?: Maybe<Scalars["String"]>
  alias_list?: Maybe<Array<Scalars["String"]>>
  twitter?: Maybe<Scalars["String"]>
  instagram?: Maybe<Scalars["String"]>
  favorite?: Maybe<Scalars["Boolean"]>
  tag_ids?: Maybe<Array<Scalars["ID"]>>
  /** This should be a URL or a base64 encoded data URL */
  image?: Maybe<Scalars["String"]>
  stash_ids?: Maybe<Array<StashIdInput>>
  rating100?: Maybe<Scalars["Int"]>
  details?: Maybe<Scalars["String"]>
  death_date?: Maybe<Scalars["String"]>
  hair_color?: Maybe<Scalars["String"]>
  weight?: Maybe<Scalars["Int"]>
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
}

type PerformerUpdateInput = {
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  disambiguation?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  gender?: Maybe<GenderEnum>
  birthdate?: Maybe<Scalars["String"]>
  ethnicity?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  eye_color?: Maybe<Scalars["String"]>
  height_cm?: Maybe<Scalars["Int"]>
  measurements?: Maybe<Scalars["String"]>
  fake_tits?: Maybe<Scalars["String"]>
  penis_length?: Maybe<Scalars["Float"]>
  circumcised?: Maybe<CircumisedEnum>
  career_length?: Maybe<Scalars["String"]>
  tattoos?: Maybe<Scalars["String"]>
  piercings?: Maybe<Scalars["String"]>
  alias_list?: Maybe<Array<Scalars["String"]>>
  twitter?: Maybe<Scalars["String"]>
  instagram?: Maybe<Scalars["String"]>
  favorite?: Maybe<Scalars["Boolean"]>
  tag_ids?: Maybe<Array<Scalars["ID"]>>
  /** This should be a URL or a base64 encoded data URL */
  image?: Maybe<Scalars["String"]>
  stash_ids?: Maybe<Array<StashIdInput>>
  rating100?: Maybe<Scalars["Int"]>
  details?: Maybe<Scalars["String"]>
  death_date?: Maybe<Scalars["String"]>
  hair_color?: Maybe<Scalars["String"]>
  weight?: Maybe<Scalars["Int"]>
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
}

type BulkUpdateStrings = {
  values?: Maybe<Array<Scalars["String"]>>
  mode: BulkUpdateIdMode
}

type BulkPerformerUpdateInput = {
  clientMutationId?: Maybe<Scalars["String"]>
  ids?: Maybe<Array<Scalars["ID"]>>
  disambiguation?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  gender?: Maybe<GenderEnum>
  birthdate?: Maybe<Scalars["String"]>
  ethnicity?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  eye_color?: Maybe<Scalars["String"]>
  height_cm?: Maybe<Scalars["Int"]>
  measurements?: Maybe<Scalars["String"]>
  fake_tits?: Maybe<Scalars["String"]>
  penis_length?: Maybe<Scalars["Float"]>
  circumcised?: Maybe<CircumisedEnum>
  career_length?: Maybe<Scalars["String"]>
  tattoos?: Maybe<Scalars["String"]>
  piercings?: Maybe<Scalars["String"]>
  alias_list?: Maybe<BulkUpdateStrings>
  twitter?: Maybe<Scalars["String"]>
  instagram?: Maybe<Scalars["String"]>
  favorite?: Maybe<Scalars["Boolean"]>
  tag_ids?: Maybe<BulkUpdateIds>
  rating100?: Maybe<Scalars["Int"]>
  details?: Maybe<Scalars["String"]>
  death_date?: Maybe<Scalars["String"]>
  hair_color?: Maybe<Scalars["String"]>
  weight?: Maybe<Scalars["Int"]>
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
}

type PerformerDestroyInput = {
  id: Scalars["ID"]
}

type FindPerformersResultType = {
  __typename?: "FindPerformersResultType"
  count: Scalars["Int"]
  performers: Array<Performer>
}

type PluginPaths = {
  __typename?: "PluginPaths"
  javascript?: Maybe<Array<Scalars["String"]>>
  css?: Maybe<Array<Scalars["String"]>>
}

type Plugin = {
  __typename?: "Plugin"
  id: Scalars["ID"]
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  enabled: Scalars["Boolean"]
  tasks?: Maybe<Array<PluginTask>>
  hooks?: Maybe<Array<PluginHook>>
  settings?: Maybe<Array<PluginSetting>>
  /**
   * Plugin IDs of plugins that this plugin depends on.
   * Applies only for UI plugins to indicate css/javascript load order.
   */
  requires?: Maybe<Array<Scalars["ID"]>>
  paths: PluginPaths
}

type PluginTask = {
  __typename?: "PluginTask"
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  plugin: Plugin
}

type PluginHook = {
  __typename?: "PluginHook"
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  hooks?: Maybe<Array<Scalars["String"]>>
  plugin: Plugin
}

type PluginResult = {
  __typename?: "PluginResult"
  error?: Maybe<Scalars["String"]>
  result?: Maybe<Scalars["String"]>
}

type PluginArgInput = {
  key: Scalars["String"]
  value?: Maybe<PluginValueInput>
}

type PluginValueInput = {
  str?: Maybe<Scalars["String"]>
  i?: Maybe<Scalars["Int"]>
  b?: Maybe<Scalars["Boolean"]>
  f?: Maybe<Scalars["Float"]>
  o?: Maybe<Array<PluginArgInput>>
  a?: Maybe<Array<PluginValueInput>>
}

enum PluginSettingTypeEnum {
  String = "STRING",
  Number = "NUMBER",
  Boolean = "BOOLEAN"
}

type PluginSetting = {
  __typename?: "PluginSetting"
  name: Scalars["String"]
  display_name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  type: PluginSettingTypeEnum
}

type SceneMarkerTag = {
  __typename?: "SceneMarkerTag"
  tag: Tag
  scene_markers: Array<SceneMarker>
}

type SceneMarker = {
  __typename?: "SceneMarker"
  id: Scalars["ID"]
  scene: Scene
  title: Scalars["String"]
  seconds: Scalars["Float"]
  primary_tag: Tag
  tags: Array<Tag>
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
  /** The path to stream this marker */
  stream: Scalars["String"]
  /** The path to the preview image for this marker */
  preview: Scalars["String"]
  /** The path to the screenshot image for this marker */
  screenshot: Scalars["String"]
}

type SceneMarkerCreateInput = {
  title: Scalars["String"]
  seconds: Scalars["Float"]
  scene_id: Scalars["ID"]
  primary_tag_id: Scalars["ID"]
  tag_ids?: Maybe<Array<Scalars["ID"]>>
}

type SceneMarkerUpdateInput = {
  id: Scalars["ID"]
  title?: Maybe<Scalars["String"]>
  seconds?: Maybe<Scalars["Float"]>
  scene_id?: Maybe<Scalars["ID"]>
  primary_tag_id?: Maybe<Scalars["ID"]>
  tag_ids?: Maybe<Array<Scalars["ID"]>>
}

type FindSceneMarkersResultType = {
  __typename?: "FindSceneMarkersResultType"
  count: Scalars["Int"]
  scene_markers: Array<SceneMarker>
}

type MarkerStringsResultType = {
  __typename?: "MarkerStringsResultType"
  count: Scalars["Int"]
  id: Scalars["ID"]
  title: Scalars["String"]
}

type SceneFileType = {
  __typename?: "SceneFileType"
  size?: Maybe<Scalars["String"]>
  duration?: Maybe<Scalars["Float"]>
  video_codec?: Maybe<Scalars["String"]>
  audio_codec?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  framerate?: Maybe<Scalars["Float"]>
  bitrate?: Maybe<Scalars["Int"]>
}

type ScenePathsType = {
  __typename?: "ScenePathsType"
  screenshot?: Maybe<Scalars["String"]>
  preview?: Maybe<Scalars["String"]>
  stream?: Maybe<Scalars["String"]>
  webp?: Maybe<Scalars["String"]>
  vtt?: Maybe<Scalars["String"]>
  sprite?: Maybe<Scalars["String"]>
  funscript?: Maybe<Scalars["String"]>
  interactive_heatmap?: Maybe<Scalars["String"]>
  caption?: Maybe<Scalars["String"]>
}

type SceneMovie = {
  __typename?: "SceneMovie"
  movie: Movie
  scene_index?: Maybe<Scalars["Int"]>
}

type VideoCaption = {
  __typename?: "VideoCaption"
  language_code: Scalars["String"]
  caption_type: Scalars["String"]
}

type Scene = {
  __typename?: "Scene"
  id: Scalars["ID"]
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  director?: Maybe<Scalars["String"]>
  /** @deprecated Use urls */
  url?: Maybe<Scalars["String"]>
  urls: Array<Scalars["String"]>
  date?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  organized: Scalars["Boolean"]
  o_counter?: Maybe<Scalars["Int"]>
  interactive: Scalars["Boolean"]
  interactive_speed?: Maybe<Scalars["Int"]>
  captions?: Maybe<Array<VideoCaption>>
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
  /** The last time play count was updated */
  last_played_at?: Maybe<Scalars["Time"]>
  /** The time index a scene was left at */
  resume_time?: Maybe<Scalars["Float"]>
  /** The total time a scene has spent playing */
  play_duration?: Maybe<Scalars["Float"]>
  /** The number ot times a scene has been played */
  play_count?: Maybe<Scalars["Int"]>
  /** Times a scene was played */
  play_history: Array<Scalars["Time"]>
  /** Times the o counter was incremented */
  o_history: Array<Scalars["Time"]>
  files: Array<VideoFile>
  paths: ScenePathsType
  scene_markers: Array<SceneMarker>
  galleries: Array<Gallery>
  studio?: Maybe<Studio>
  movies: Array<SceneMovie>
  tags: Array<Tag>
  performers: Array<Performer>
  stash_ids: Array<StashId>
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>
}

type SceneMovieInput = {
  movie_id: Scalars["ID"]
  scene_index?: Maybe<Scalars["Int"]>
}

type SceneCreateInput = {
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  director?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  date?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  organized?: Maybe<Scalars["Boolean"]>
  studio_id?: Maybe<Scalars["ID"]>
  gallery_ids?: Maybe<Array<Scalars["ID"]>>
  performer_ids?: Maybe<Array<Scalars["ID"]>>
  movies?: Maybe<Array<SceneMovieInput>>
  tag_ids?: Maybe<Array<Scalars["ID"]>>
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: Maybe<Scalars["String"]>
  stash_ids?: Maybe<Array<StashIdInput>>
  /**
   * The first id will be assigned as primary.
   * Files will be reassigned from existing scenes if applicable.
   * Files must not already be primary for another scene.
   */
  file_ids?: Maybe<Array<Scalars["ID"]>>
}

type SceneUpdateInput = {
  clientMutationId?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  director?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  date?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  o_counter?: Maybe<Scalars["Int"]>
  organized?: Maybe<Scalars["Boolean"]>
  studio_id?: Maybe<Scalars["ID"]>
  gallery_ids?: Maybe<Array<Scalars["ID"]>>
  performer_ids?: Maybe<Array<Scalars["ID"]>>
  movies?: Maybe<Array<SceneMovieInput>>
  tag_ids?: Maybe<Array<Scalars["ID"]>>
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: Maybe<Scalars["String"]>
  stash_ids?: Maybe<Array<StashIdInput>>
  /** The time index a scene was left at */
  resume_time?: Maybe<Scalars["Float"]>
  /** The total time a scene has spent playing */
  play_duration?: Maybe<Scalars["Float"]>
  /** The number ot times a scene has been played */
  play_count?: Maybe<Scalars["Int"]>
  primary_file_id?: Maybe<Scalars["ID"]>
}

enum BulkUpdateIdMode {
  Set = "SET",
  Add = "ADD",
  Remove = "REMOVE"
}

type BulkUpdateIds = {
  ids?: Maybe<Array<Scalars["ID"]>>
  mode: BulkUpdateIdMode
}

type BulkSceneUpdateInput = {
  clientMutationId?: Maybe<Scalars["String"]>
  ids?: Maybe<Array<Scalars["ID"]>>
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  director?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<BulkUpdateStrings>
  date?: Maybe<Scalars["String"]>
  rating100?: Maybe<Scalars["Int"]>
  organized?: Maybe<Scalars["Boolean"]>
  studio_id?: Maybe<Scalars["ID"]>
  gallery_ids?: Maybe<BulkUpdateIds>
  performer_ids?: Maybe<BulkUpdateIds>
  tag_ids?: Maybe<BulkUpdateIds>
  movie_ids?: Maybe<BulkUpdateIds>
}

type SceneDestroyInput = {
  id: Scalars["ID"]
  delete_file?: Maybe<Scalars["Boolean"]>
  delete_generated?: Maybe<Scalars["Boolean"]>
}

type ScenesDestroyInput = {
  ids: Array<Scalars["ID"]>
  delete_file?: Maybe<Scalars["Boolean"]>
  delete_generated?: Maybe<Scalars["Boolean"]>
}

type FindScenesResultType = {
  __typename?: "FindScenesResultType"
  count: Scalars["Int"]
  /** Total duration in seconds */
  duration: Scalars["Float"]
  /** Total file size in bytes */
  filesize: Scalars["Float"]
  scenes: Array<Scene>
}

type SceneParserInput = {
  ignoreWords?: Maybe<Array<Scalars["String"]>>
  whitespaceCharacters?: Maybe<Scalars["String"]>
  capitalizeTitle?: Maybe<Scalars["Boolean"]>
  ignoreOrganized?: Maybe<Scalars["Boolean"]>
}

type SceneMovieId = {
  __typename?: "SceneMovieID"
  movie_id: Scalars["ID"]
  scene_index?: Maybe<Scalars["String"]>
}

type SceneParserResult = {
  __typename?: "SceneParserResult"
  scene: Scene
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  director?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  date?: Maybe<Scalars["String"]>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars["Int"]>
  rating100?: Maybe<Scalars["Int"]>
  studio_id?: Maybe<Scalars["ID"]>
  gallery_ids?: Maybe<Array<Scalars["ID"]>>
  performer_ids?: Maybe<Array<Scalars["ID"]>>
  movies?: Maybe<Array<SceneMovieId>>
  tag_ids?: Maybe<Array<Scalars["ID"]>>
}

type SceneParserResultType = {
  __typename?: "SceneParserResultType"
  count: Scalars["Int"]
  results: Array<SceneParserResult>
}

type SceneHashInput = {
  checksum?: Maybe<Scalars["String"]>
  oshash?: Maybe<Scalars["String"]>
}

type SceneStreamEndpoint = {
  __typename?: "SceneStreamEndpoint"
  url: Scalars["String"]
  mime_type?: Maybe<Scalars["String"]>
  label?: Maybe<Scalars["String"]>
}

type AssignSceneFileInput = {
  scene_id: Scalars["ID"]
  file_id: Scalars["ID"]
}

type SceneMergeInput = {
  /**
   * If destination scene has no files, then the primary file of the
   * first source scene will be assigned as primary
   */
  source: Array<Scalars["ID"]>
  destination: Scalars["ID"]
  values?: Maybe<SceneUpdateInput>
  play_history?: Maybe<Scalars["Boolean"]>
  o_history?: Maybe<Scalars["Boolean"]>
}

type HistoryMutationResult = {
  __typename?: "HistoryMutationResult"
  count: Scalars["Int"]
  history: Array<Scalars["Time"]>
}

/** A movie from a scraping operation... */
type ScrapedMovie = {
  __typename?: "ScrapedMovie"
  stored_id?: Maybe<Scalars["ID"]>
  name?: Maybe<Scalars["String"]>
  aliases?: Maybe<Scalars["String"]>
  duration?: Maybe<Scalars["String"]>
  date?: Maybe<Scalars["String"]>
  rating?: Maybe<Scalars["String"]>
  director?: Maybe<Scalars["String"]>
  /** @deprecated use urls */
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  synopsis?: Maybe<Scalars["String"]>
  studio?: Maybe<ScrapedStudio>
  /** This should be a base64 encoded data URL */
  front_image?: Maybe<Scalars["String"]>
  /** This should be a base64 encoded data URL */
  back_image?: Maybe<Scalars["String"]>
}

type ScrapedMovieInput = {
  name?: Maybe<Scalars["String"]>
  aliases?: Maybe<Scalars["String"]>
  duration?: Maybe<Scalars["String"]>
  date?: Maybe<Scalars["String"]>
  rating?: Maybe<Scalars["String"]>
  director?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  synopsis?: Maybe<Scalars["String"]>
}

/** A performer from a scraping operation... */
type ScrapedPerformer = {
  __typename?: "ScrapedPerformer"
  /** Set if performer matched */
  stored_id?: Maybe<Scalars["ID"]>
  name?: Maybe<Scalars["String"]>
  disambiguation?: Maybe<Scalars["String"]>
  gender?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  twitter?: Maybe<Scalars["String"]>
  instagram?: Maybe<Scalars["String"]>
  birthdate?: Maybe<Scalars["String"]>
  ethnicity?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  eye_color?: Maybe<Scalars["String"]>
  height?: Maybe<Scalars["String"]>
  measurements?: Maybe<Scalars["String"]>
  fake_tits?: Maybe<Scalars["String"]>
  penis_length?: Maybe<Scalars["String"]>
  circumcised?: Maybe<Scalars["String"]>
  career_length?: Maybe<Scalars["String"]>
  tattoos?: Maybe<Scalars["String"]>
  piercings?: Maybe<Scalars["String"]>
  aliases?: Maybe<Scalars["String"]>
  tags?: Maybe<Array<ScrapedTag>>
  /**
   * This should be a base64 encoded data URL
   * @deprecated use images instead
   */
  image?: Maybe<Scalars["String"]>
  images?: Maybe<Array<Scalars["String"]>>
  details?: Maybe<Scalars["String"]>
  death_date?: Maybe<Scalars["String"]>
  hair_color?: Maybe<Scalars["String"]>
  weight?: Maybe<Scalars["String"]>
  remote_site_id?: Maybe<Scalars["String"]>
}

type ScrapedPerformerInput = {
  /** Set if performer matched */
  stored_id?: Maybe<Scalars["ID"]>
  name?: Maybe<Scalars["String"]>
  disambiguation?: Maybe<Scalars["String"]>
  gender?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  twitter?: Maybe<Scalars["String"]>
  instagram?: Maybe<Scalars["String"]>
  birthdate?: Maybe<Scalars["String"]>
  ethnicity?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  eye_color?: Maybe<Scalars["String"]>
  height?: Maybe<Scalars["String"]>
  measurements?: Maybe<Scalars["String"]>
  fake_tits?: Maybe<Scalars["String"]>
  penis_length?: Maybe<Scalars["String"]>
  circumcised?: Maybe<Scalars["String"]>
  career_length?: Maybe<Scalars["String"]>
  tattoos?: Maybe<Scalars["String"]>
  piercings?: Maybe<Scalars["String"]>
  aliases?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  death_date?: Maybe<Scalars["String"]>
  hair_color?: Maybe<Scalars["String"]>
  weight?: Maybe<Scalars["String"]>
  remote_site_id?: Maybe<Scalars["String"]>
}

enum ScrapeType {
  /** From text query */
  Name = "NAME",
  /** From existing object */
  Fragment = "FRAGMENT",
  /** From URL */
  Url = "URL"
}

/** Type of the content a scraper generates */
enum ScrapeContentType {
  Gallery = "GALLERY",
  Movie = "MOVIE",
  Performer = "PERFORMER",
  Scene = "SCENE"
}

/** Scraped Content is the forming union over the different scrapers */
type ScrapedContent =
  | ScrapedStudio
  | ScrapedTag
  | ScrapedScene
  | ScrapedGallery
  | ScrapedMovie
  | ScrapedPerformer

type ScraperSpec = {
  __typename?: "ScraperSpec"
  /** URLs matching these can be scraped with */
  urls?: Maybe<Array<Scalars["String"]>>
  supported_scrapes: Array<ScrapeType>
}

type Scraper = {
  __typename?: "Scraper"
  id: Scalars["ID"]
  name: Scalars["String"]
  /** Details for performer scraper */
  performer?: Maybe<ScraperSpec>
  /** Details for scene scraper */
  scene?: Maybe<ScraperSpec>
  /** Details for gallery scraper */
  gallery?: Maybe<ScraperSpec>
  /** Details for movie scraper */
  movie?: Maybe<ScraperSpec>
}

type ScrapedStudio = {
  __typename?: "ScrapedStudio"
  /** Set if studio matched */
  stored_id?: Maybe<Scalars["ID"]>
  name: Scalars["String"]
  url?: Maybe<Scalars["String"]>
  parent?: Maybe<ScrapedStudio>
  image?: Maybe<Scalars["String"]>
  remote_site_id?: Maybe<Scalars["String"]>
}

type ScrapedTag = {
  __typename?: "ScrapedTag"
  /** Set if tag matched */
  stored_id?: Maybe<Scalars["ID"]>
  name: Scalars["String"]
}

type ScrapedScene = {
  __typename?: "ScrapedScene"
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  director?: Maybe<Scalars["String"]>
  /** @deprecated use urls */
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  date?: Maybe<Scalars["String"]>
  /** This should be a base64 encoded data URL */
  image?: Maybe<Scalars["String"]>
  file?: Maybe<SceneFileType>
  studio?: Maybe<ScrapedStudio>
  tags?: Maybe<Array<ScrapedTag>>
  performers?: Maybe<Array<ScrapedPerformer>>
  movies?: Maybe<Array<ScrapedMovie>>
  remote_site_id?: Maybe<Scalars["String"]>
  duration?: Maybe<Scalars["Int"]>
  fingerprints?: Maybe<Array<StashBoxFingerprint>>
}

type ScrapedSceneInput = {
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  director?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  date?: Maybe<Scalars["String"]>
  remote_site_id?: Maybe<Scalars["String"]>
}

type ScrapedGallery = {
  __typename?: "ScrapedGallery"
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  photographer?: Maybe<Scalars["String"]>
  /** @deprecated use urls */
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  date?: Maybe<Scalars["String"]>
  studio?: Maybe<ScrapedStudio>
  tags?: Maybe<Array<ScrapedTag>>
  performers?: Maybe<Array<ScrapedPerformer>>
}

type ScrapedGalleryInput = {
  title?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  details?: Maybe<Scalars["String"]>
  photographer?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<Scalars["String"]>>
  date?: Maybe<Scalars["String"]>
}

type ScraperSourceInput = {
  /** Index of the configured stash-box instance to use. Should be unset if scraper_id is set */
  stash_box_index?: Maybe<Scalars["Int"]>
  /** Stash-box endpoint */
  stash_box_endpoint?: Maybe<Scalars["String"]>
  /** Scraper ID to scrape with. Should be unset if stash_box_endpoint/stash_box_index is set */
  scraper_id?: Maybe<Scalars["ID"]>
}

type ScraperSource = {
  __typename?: "ScraperSource"
  /**
   * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: Maybe<Scalars["Int"]>
  /** Stash-box endpoint */
  stash_box_endpoint?: Maybe<Scalars["String"]>
  /** Scraper ID to scrape with. Should be unset if stash_box_endpoint/stash_box_index is set */
  scraper_id?: Maybe<Scalars["ID"]>
}

type ScrapeSingleSceneInput = {
  /** Instructs to query by string */
  query?: Maybe<Scalars["String"]>
  /** Instructs to query by scene fingerprints */
  scene_id?: Maybe<Scalars["ID"]>
  /** Instructs to query by scene fragment */
  scene_input?: Maybe<ScrapedSceneInput>
}

type ScrapeMultiScenesInput = {
  /** Instructs to query by scene fingerprints */
  scene_ids?: Maybe<Array<Scalars["ID"]>>
}

type ScrapeSingleStudioInput = {
  /** Query can be either a name or a Stash ID */
  query?: Maybe<Scalars["String"]>
}

type ScrapeSinglePerformerInput = {
  /** Instructs to query by string */
  query?: Maybe<Scalars["String"]>
  /** Instructs to query by performer id */
  performer_id?: Maybe<Scalars["ID"]>
  /** Instructs to query by performer fragment */
  performer_input?: Maybe<ScrapedPerformerInput>
}

type ScrapeMultiPerformersInput = {
  /** Instructs to query by scene fingerprints */
  performer_ids?: Maybe<Array<Scalars["ID"]>>
}

type ScrapeSingleGalleryInput = {
  /** Instructs to query by string */
  query?: Maybe<Scalars["String"]>
  /** Instructs to query by gallery id */
  gallery_id?: Maybe<Scalars["ID"]>
  /** Instructs to query by gallery fragment */
  gallery_input?: Maybe<ScrapedGalleryInput>
}

type ScrapeSingleMovieInput = {
  /** Instructs to query by string */
  query?: Maybe<Scalars["String"]>
  /** Instructs to query by movie id */
  movie_id?: Maybe<Scalars["ID"]>
  /** Instructs to query by gallery fragment */
  movie_input?: Maybe<ScrapedMovieInput>
}

type StashBoxSceneQueryInput = {
  /** Index of the configured stash-box instance to use */
  stash_box_index?: Maybe<Scalars["Int"]>
  /** Endpoint of the stash-box instance to use */
  stash_box_endpoint?: Maybe<Scalars["String"]>
  /** Instructs query by scene fingerprints */
  scene_ids?: Maybe<Array<Scalars["ID"]>>
  /** Query by query string */
  q?: Maybe<Scalars["String"]>
}

type StashBoxPerformerQueryInput = {
  /** Index of the configured stash-box instance to use */
  stash_box_index?: Maybe<Scalars["Int"]>
  /** Endpoint of the stash-box instance to use */
  stash_box_endpoint?: Maybe<Scalars["String"]>
  /** Instructs query by scene fingerprints */
  performer_ids?: Maybe<Array<Scalars["ID"]>>
  /** Query by query string */
  q?: Maybe<Scalars["String"]>
}

type StashBoxPerformerQueryResult = {
  __typename?: "StashBoxPerformerQueryResult"
  query: Scalars["String"]
  results: Array<ScrapedPerformer>
}

type StashBoxFingerprint = {
  __typename?: "StashBoxFingerprint"
  algorithm: Scalars["String"]
  hash: Scalars["String"]
  duration: Scalars["Int"]
}

/** If neither ids nor names are set, tag all items */
type StashBoxBatchTagInput = {
  /** Stash endpoint to use for the tagging */
  endpoint?: Maybe<Scalars["Int"]>
  /** Endpoint of the stash-box instance to use */
  stash_box_endpoint?: Maybe<Scalars["String"]>
  /** Fields to exclude when executing the tagging */
  exclude_fields?: Maybe<Array<Scalars["String"]>>
  /** Refresh items already tagged by StashBox if true. Only tag items with no StashBox tagging if false */
  refresh: Scalars["Boolean"]
  /** If batch adding studios, should their parent studios also be created? */
  createParent: Scalars["Boolean"]
  /** If set, only tag these ids */
  ids?: Maybe<Array<Scalars["ID"]>>
  /** If set, only tag these names */
  names?: Maybe<Array<Scalars["String"]>>
  /** If set, only tag these performer ids */
  performer_ids?: Maybe<Array<Scalars["ID"]>>
  /** If set, only tag these performer names */
  performer_names?: Maybe<Array<Scalars["String"]>>
}

type SqlQueryResult = {
  __typename?: "SQLQueryResult"
  /** The column names, in the order they appear in the result set. */
  columns: Array<Scalars["String"]>
  /** The returned rows. */
  rows: Array<Array<Maybe<Scalars["Any"]>>>
}

type SqlExecResult = {
  __typename?: "SQLExecResult"
  /**
   * The number of rows affected by the query, usually an UPDATE, INSERT, or DELETE.
   * Not all queries or databases support this feature.
   */
  rows_affected?: Maybe<Scalars["Int64"]>
  /**
   * The integer generated by the database in response to a command.
   * Typically this will be from an "auto increment" column when inserting a new row.
   * Not all databases support this feature, and the syntax of such statements varies.
   */
  last_insert_id?: Maybe<Scalars["Int64"]>
}

type StashBox = {
  __typename?: "StashBox"
  endpoint: Scalars["String"]
  api_key: Scalars["String"]
  name: Scalars["String"]
}

type StashBoxInput = {
  endpoint: Scalars["String"]
  api_key: Scalars["String"]
  name: Scalars["String"]
}

type StashId = {
  __typename?: "StashID"
  endpoint: Scalars["String"]
  stash_id: Scalars["String"]
}

type StashIdInput = {
  endpoint: Scalars["String"]
  stash_id: Scalars["String"]
}

type StashBoxFingerprintSubmissionInput = {
  scene_ids: Array<Scalars["String"]>
  stash_box_index?: Maybe<Scalars["Int"]>
  stash_box_endpoint?: Maybe<Scalars["String"]>
}

type StashBoxDraftSubmissionInput = {
  id: Scalars["String"]
  stash_box_index?: Maybe<Scalars["Int"]>
  stash_box_endpoint?: Maybe<Scalars["String"]>
}

type StatsResultType = {
  __typename?: "StatsResultType"
  scene_count: Scalars["Int"]
  scenes_size: Scalars["Float"]
  scenes_duration: Scalars["Float"]
  image_count: Scalars["Int"]
  images_size: Scalars["Float"]
  gallery_count: Scalars["Int"]
  performer_count: Scalars["Int"]
  studio_count: Scalars["Int"]
  movie_count: Scalars["Int"]
  tag_count: Scalars["Int"]
  total_o_count: Scalars["Int"]
  total_play_duration: Scalars["Float"]
  total_play_count: Scalars["Int"]
  scenes_played: Scalars["Int"]
}

type Studio = {
  __typename?: "Studio"
  id: Scalars["ID"]
  name: Scalars["String"]
  url?: Maybe<Scalars["String"]>
  parent_studio?: Maybe<Studio>
  child_studios: Array<Studio>
  aliases: Array<Scalars["String"]>
  ignore_auto_tag: Scalars["Boolean"]
  image_path?: Maybe<Scalars["String"]>
  scene_count: Scalars["Int"]
  image_count: Scalars["Int"]
  gallery_count: Scalars["Int"]
  performer_count: Scalars["Int"]
  movie_count: Scalars["Int"]
  stash_ids: Array<StashId>
  rating100?: Maybe<Scalars["Int"]>
  favorite: Scalars["Boolean"]
  details?: Maybe<Scalars["String"]>
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
  movies: Array<Movie>
}

type StudioScene_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type StudioImage_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type StudioGallery_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type StudioPerformer_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type StudioMovie_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type StudioCreateInput = {
  name: Scalars["String"]
  url?: Maybe<Scalars["String"]>
  parent_id?: Maybe<Scalars["ID"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: Maybe<Scalars["String"]>
  stash_ids?: Maybe<Array<StashIdInput>>
  rating100?: Maybe<Scalars["Int"]>
  favorite?: Maybe<Scalars["Boolean"]>
  details?: Maybe<Scalars["String"]>
  aliases?: Maybe<Array<Scalars["String"]>>
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
}

type StudioUpdateInput = {
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  parent_id?: Maybe<Scalars["ID"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: Maybe<Scalars["String"]>
  stash_ids?: Maybe<Array<StashIdInput>>
  rating100?: Maybe<Scalars["Int"]>
  favorite?: Maybe<Scalars["Boolean"]>
  details?: Maybe<Scalars["String"]>
  aliases?: Maybe<Array<Scalars["String"]>>
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
}

type StudioDestroyInput = {
  id: Scalars["ID"]
}

type FindStudiosResultType = {
  __typename?: "FindStudiosResultType"
  count: Scalars["Int"]
  studios: Array<Studio>
}

type Tag = {
  __typename?: "Tag"
  id: Scalars["ID"]
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  aliases: Array<Scalars["String"]>
  ignore_auto_tag: Scalars["Boolean"]
  created_at: Scalars["Time"]
  updated_at: Scalars["Time"]
  favorite: Scalars["Boolean"]
  image_path?: Maybe<Scalars["String"]>
  scene_count: Scalars["Int"]
  scene_marker_count: Scalars["Int"]
  image_count: Scalars["Int"]
  gallery_count: Scalars["Int"]
  performer_count: Scalars["Int"]
  parents: Array<Tag>
  children: Array<Tag>
  parent_count: Scalars["Int"]
  child_count: Scalars["Int"]
}

type TagScene_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type TagScene_Marker_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type TagImage_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type TagGallery_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type TagPerformer_CountArgs = {
  depth?: Maybe<Scalars["Int"]>
}

type TagCreateInput = {
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  aliases?: Maybe<Array<Scalars["String"]>>
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
  favorite?: Maybe<Scalars["Boolean"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: Maybe<Scalars["String"]>
  parent_ids?: Maybe<Array<Scalars["ID"]>>
  child_ids?: Maybe<Array<Scalars["ID"]>>
}

type TagUpdateInput = {
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  aliases?: Maybe<Array<Scalars["String"]>>
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
  favorite?: Maybe<Scalars["Boolean"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: Maybe<Scalars["String"]>
  parent_ids?: Maybe<Array<Scalars["ID"]>>
  child_ids?: Maybe<Array<Scalars["ID"]>>
}

type TagDestroyInput = {
  id: Scalars["ID"]
}

type FindTagsResultType = {
  __typename?: "FindTagsResultType"
  count: Scalars["Int"]
  tags: Array<Tag>
}

type TagsMergeInput = {
  source: Array<Scalars["ID"]>
  destination: Scalars["ID"]
}

type BulkTagUpdateInput = {
  ids?: Maybe<Array<Scalars["ID"]>>
  description?: Maybe<Scalars["String"]>
  aliases?: Maybe<BulkUpdateStrings>
  ignore_auto_tag?: Maybe<Scalars["Boolean"]>
  favorite?: Maybe<Scalars["Boolean"]>
  parent_ids?: Maybe<BulkUpdateIds>
  child_ids?: Maybe<BulkUpdateIds>
}

type Version = {
  __typename?: "Version"
  version?: Maybe<Scalars["String"]>
  hash: Scalars["String"]
  build_time: Scalars["String"]
}

type LatestVersion = {
  __typename?: "LatestVersion"
  version: Scalars["String"]
  shorthash: Scalars["String"]
  release_date: Scalars["String"]
  url: Scalars["String"]
}

interface IratingSystemOptions {
  starPrecision: "full" | "half" | "quarter" | "tenth";
  type: "decimal" | "stars";
}
