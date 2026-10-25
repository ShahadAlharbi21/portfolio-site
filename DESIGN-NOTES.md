# Current asset organisation

The original Hex, Kilburnazon and Booking screenshots now have one canonical copy each in public/projects. Their bytes are unchanged; original filenames and hashes are recorded in docs/project-assets.json. References to the former Hex AI, kilburnazon and ds source directories below describe historical layouts. CW3 retains the newer complete report and original Python implementation. Unused image exports, LaTeX source, the older report and assignment handout were removed. Selected stereo images have one canonical copy in public/projects/stereo. The records below describe historical layouts.

# Final semantic, logo and wording refinements

Checkpoint: 4e2900e. Existing six-project layout, hero, About, skills and typography retained.

NLI now uses paired semantic highlights and layout-aware connectors for participants and activity. This is labelled as illustrative semantic alignment, not measured attention. The illustrative three-way NLI labels are separate from the actual project binary-task Macro-F1 scores. The cafe accent is UTF-8. Movie Genre retains its three alternative architectures and now uses the user's exact updated bullets (8 genres, optimized thresholds). Matching Stereo and Kilburnazon descriptions remain exact. Hex now lists Python and Bash while keeping its original description and uncropped screenshots.

Booking arrows are four SVG line elements, two requests and two responses, with no bidirectional arrowheads or curved connection paths. Icons remain unchanged.

Education uses authentic institutional vectors: Manchester's complete logo exported from its official PDF, and NEOM's original monochrome symbol from its official website SVG bundle. Their original paths and colours are retained and supported on a shared ivory field. Manchester guidelines prohibit arbitrary recolouring, so no palette recreation was substituted. Sources are recorded in docs/institution-logo-sources.json. University dates are 2023 to 2026 and NEOM dates 2021 to 2026, displayed as the requested date ranges.

Footer reads copyright 2026 Shahad Alharbi, with existing GitHub and Email links. No new projects, contact section, Udemy entry or motivational text were added.

Earlier design records below describe superseded iterations.

# Consistent project layout and website structure

Checkpoint: 22dd97f. All six projects share the same 45/55 visual-left/content-right grid above 900px, and visual-first stacking below it. No project-specific full-width layouts remain.

NLI now illustrates premise, hypothesis and entailment, with small numeric Macro-F1 comparisons. Movie Genre uses three compact alternative model tracks and a shared eight-label output. Booking uses four separate one-way paths, with coral requests and blue responses. Stereo retains all four genuine assets. Hex displays complete, uncropped originals in chronological DOM order, with a larger later-game image and two supporting views; all images have an accessible native dialog for original-resolution inspection and an original-file link. The dialog supports Escape.

No genuine Kilburnazon screenshot was supplied. Its fictional employee interface was removed in favour of a workflow illustration grounded in the unchanged project description. Python standard-library module badges were removed from Hex.

Education & Recognition contains the degree (2026) and scholarship (2021 to 2026), using the dates supplied in the latest user brief. The Udemy entry and Contact section were removed. The three genuine certificate entries and PDFs remain. Footer retains the monogram, copyright, GitHub and Email. Legacy Contact fragments point to the footer. Hero, About, six project descriptions, technology branding and cinematic artwork are retained.

Older design records below describe superseded implementations.

# Final project visual refinements

Checkpoint before these changes: a07707f.

Skills retains deep forest teal #102D2A; Projects uses #193B40. All six project technology decks now stack categories vertically. Hero, navigation, personal content, certificates and centred Contact are retained.

Only nine selected project images are included in public/projects. Source paths and hashes are in docs/project-assets.json. All supplied originals in CW3, NLI, Hex AI and ds remain unchanged outside public and are not copied into the production build. PDF inspection tools and review sheets are outside the project under the Codex temporary directory; no website dependency was added.

CW3 review covered all 45 PNGs, the Python implementation, LaTeX report, both report PDFs and the coursework handout. The report and code select 64 disparities / block size 13 for dense reconstruction. The chosen dense disparity and point cloud are consistent with that configuration. The missing left input was recovered losslessly from the original embedded image in Figure 2(a) of the coursework PDF. The right input is the supplied standalone image. Other parameter experiments and selective-focus examples were omitted to keep the presentation focused.

The actual NLI poster was read and visually inspected. It specifies binary entailment (1) and non-entailment (0); the portfolio uses the poster's illustrative cafe conversation example and its development-set Macro-F1 values 0.6379 and 0.9187. No model prediction is claimed.

Hex image chronology was verified using visible turns and timestamps: opening, turn 8/9, later final board. The screenshots show a particular run and are not offered as evidence for the separate 94% / 100-game baseline result. CSS frames focus on the complete original boards without altering image files; every image opens its complete original screenshot.

Distributed Booking uses both supplied screenshots unchanged, with only Client, Hotel service and Band service in the small architecture diagram. Movie Genre follows the user's supplied architecture and exact eight genre labels. The three models remain separate alternatives. No notebooks were read and no per-model scores or probabilities were invented.

The 21 existing technology badge images are cached locally with identical branding, keeping their original documentation links. Source URLs are recorded in docs/technology-sources.json. No source PDFs, code, reports or notebooks are deployed.

Earlier design notes follow for provenance and describe superseded visuals.

# Current refinement

The cinematic artwork, font imports, colour palette and wordmark are retained. The current page order is Hero, About, Skills, Projects, Certificates, Contact. Navigation uses section anchors; legacy section URLs are redirected to their anchors.

The hero now shows Shahad Alharbi and a static professional identity. The typing component and blinking cursor were removed. About includes only the personal, academic and scholarship information supplied by the user.

Exactly six projects are displayed, one per row. Technical descriptions, dates, labels and metrics follow the refinement brief. All examples, interface concepts and schematic outputs are labelled. No experimental images or model predictions are claimed. The Hex visual uses a valid adjacent-cell connection on a rhombic hexagonal board. Dependencies for Hex retain Python standard-library random, math and time from the original project information.

The previous course descriptions, three working certificate PDFs, GitHub link, email address, authentic logo assets and theme control are retained. First-Class Honours and the NEOM scholarship are supported by the user brief. No evidence for the two additional excellence awards or award dates exists in the checkout, so none was invented.

Pre-refinement checkpoint: b69c7d6.

The earlier design record and exact artwork-generation prompt follow for provenance; its description of project counts and typing refers to the superseded version.

# Creative direction

The previous implementation repeated navy containers, small system typography and text-plus-badge layouts. The redesign uses original twilight scenery, ivory editorial pages, coral wayfinding, indigo project art, and amber contact accents. The first engineering study spans the gallery, followed by paired studies and a complete open archive. All 17 previously active projects retain their original technical descriptions and technology badges. Previously commented-out projects remain commented out.

Checkpoint: e253845 preserves the supplied uncommitted implementation.

## Artwork

Built-in imagegen tool. Asset: public/twilight-landscape.png.

Prompt: Create an original sophisticated Japanese woodblock meets contemporary hand-painted editorial landscape illustration, ultra-wide cinematic 3:2 composition intended as website hero background. Rainy twilight alpine lake, richly layered indigo mountains in mist, dense intricate evergreen pines framing right edge and foreground bottom, distant winding lake reflecting luminous coral pink and amber break in storm clouds, finely detailed illustrated foliage and rock formations. Deep evergreen #102D2B, petrol teal #176B75, atmospheric blue #789DAF, twilight indigo #343F68, vivid coral #ED8D83, warm amber. LEFT THIRD and upper left stay predominantly dark evergreen shaded mountain mist with very low detail to accommodate cream typography, visual focus right two thirds. Quiet cinematic emotional warmth and nostalgia, visibly hand drawn etched texture, exquisite fine art illustration, no photography, no text, no logos, no buildings, no people, no cups, no computer, no interface, no neon. Landscape must have beautifully composed realistic geography and intricate trees, elegant graphic flat color planes combined with painterly texture.

Project SVGs are labelled conceptual illustrations, not actual experimental outputs. Metrics come from the existing descriptions.

## Sources and content boundaries

Browsed Siteinspire editorial and portfolio collections and Awwwards art listings for reference; no layouts or assets were copied.
https://www.siteinspire.com/websites/category/editorial
https://www.awwwards.com/websites/art/

The supplied checkout had no typing component (including Git history search), LinkedIn URL, university logo, or project repository/demo links. A new accessible typing animation implements the requested identity. Existing GitHub and email links remain; no missing URLs, project results, or brand assets were invented. Graduate status follows the explicit user brief.
