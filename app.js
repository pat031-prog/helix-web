const translations = {
  es: {
    brandSubtitle: "runtime comprimido + laboratorio de agentes",
    languageLabel: "Idioma",
    themeLabel: "Tema",
    themeLight: "Claro",
    themeDark: "Oscuro",
    backToLanding: "Volver al inicio",
    liveSystemTag: "Sistema activo",
    heroMicroCopy: "Inferencia comprimida / herramientas / memoria / bucle agentic",
    heroTitle: "LAB DE AGENTES",
    heroCopy:
      "Una consola desplegable para Helix Proto. Generá texto en stream, ejecutá el loop del agente y consultá conocimiento persistente desde una interfaz modular.",
    backendLabel: "Backend",
    preparedModelsLabel: "Modelos preparados",
    modelsFoot: "Registro detectado desde el backend conectado.",
    apiLinkTag: "Enlace API",
    renderBackendLabel: "URL del backend en Render",
    apiPlaceholder: "https://tu-backend.onrender.com",
    connectButton: "Conectar",
    apiNote:
      "Se guarda en este navegador. Dejalo vacío si querés usar mismo origen cuando el frontend esté servido por el backend.",
    chatTab: "Chat en stream",
    agentTab: "Ejecución del agente",
    knowledgeTab: "Conocimiento",
    sameOriginLabel: "Mismo origen",
    noModelLoaded: "Sin modelo cargado",
    streamTokensTag: "Stream de tokens",
    chatConsoleTitle: "Consola de chat",
    modelAliasLabel: "Alias del modelo",
    maxNewTokensLabel: "Máx. tokens nuevos",
    promptLabel: "Prompt",
    chatPromptPlaceholder: "Pedile algo útil al modelo local...",
    startStreamButton: "Iniciar stream",
    liveOutputTag: "Salida en vivo",
    idle: "En espera",
    plannerLoopTag: "Loop del planner",
    agentControlTitle: "Control del agente",
    agentNameLabel: "Nombre del agente",
    defaultModelAliasLabel: "Alias de modelo por defecto",
    noneOption: "Ninguno",
    goalLabel: "Objetivo",
    agentGoalPlaceholder: "Pedí un resumen, una búsqueda o una tarea con herramientas...",
    runAgentButton: "Ejecutar agente",
    traceFeedTag: "Feed de trazas",
    ingestTag: "Ingesta",
    addKnowledgeTitle: "Agregar conocimiento",
    sourceLabel: "Fuente",
    textLabel: "Texto",
    knowledgeTextPlaceholder: "Pegá notas estratégicas, cláusulas legales o contexto del producto...",
    saveChunkButton: "Guardar bloque",
    recallTag: "Recuperación",
    searchKnowledgeTitle: "Buscar conocimiento",
    topKLabel: "Top K",
    searchQueryLabel: "Consulta",
    knowledgeQueryPlaceholder: "Buscá en la base persistente de conocimiento",
    searchButton: "Buscar",
    resultSetTag: "Resultados",
    checking: "Verificando",
    waitingHealth: "Esperando chequeo de salud...",
    online: "En línea",
    workspaceAvailable: "Workspace disponible",
    offline: "Sin conexión",
    connectingToBackend: "Conectando con el backend...",
    backendErrorPrefix: "Error del backend",
    remoteApiPrefix: "API remota",
    primaryPrefix: "Principal",
    transient: "transitoria",
    streaming: "Streameando",
    sessionLabel: "Sesión",
    done: "Listo",
    error: "Error",
    running: "Ejecutando",
    traceLabel: "Traza",
    saving: "Guardando",
    knowledgeChunkStored: "Bloque de conocimiento guardado",
    searching: "Buscando",
    hits: "resultados",
    planLabel: "plan",
    toolLabel: "herramienta",
    resultLabel: "resultado",
    finalLabel: "respuesta final",
  },
  en: {
    brandSubtitle: "compressed runtime + agent lab",
    languageLabel: "Language",
    themeLabel: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    backToLanding: "Back to Home",
    liveSystemTag: "Live system",
    heroMicroCopy: "Compressed inference / tools / memory / agent loop",
    heroTitle: "AGENT LAB",
    heroCopy:
      "A deployable console for Helix Proto. Stream text, run the agent loop, and search persistent knowledge from one modular interface.",
    backendLabel: "Backend",
    preparedModelsLabel: "Prepared models",
    modelsFoot: "Registry discovered from the connected backend.",
    apiLinkTag: "API Link",
    renderBackendLabel: "Render backend URL",
    apiPlaceholder: "https://your-backend.onrender.com",
    connectButton: "Connect",
    apiNote:
      "Saved in this browser. Leave it empty to use same-origin mode when the frontend is served by the backend.",
    chatTab: "Chat stream",
    agentTab: "Agent run",
    knowledgeTab: "Knowledge",
    sameOriginLabel: "Same origin",
    noModelLoaded: "No model loaded",
    streamTokensTag: "Token stream",
    chatConsoleTitle: "Chat console",
    modelAliasLabel: "Model alias",
    maxNewTokensLabel: "Max new tokens",
    promptLabel: "Prompt",
    chatPromptPlaceholder: "Ask the local model something useful...",
    startStreamButton: "Start stream",
    liveOutputTag: "Live output",
    idle: "Idle",
    plannerLoopTag: "Planner loop",
    agentControlTitle: "Agent control",
    agentNameLabel: "Agent name",
    defaultModelAliasLabel: "Default model alias",
    noneOption: "None",
    goalLabel: "Goal",
    agentGoalPlaceholder: "Ask for a summary, retrieval, or a tool-backed task...",
    runAgentButton: "Run agent",
    traceFeedTag: "Trace feed",
    ingestTag: "Ingest",
    addKnowledgeTitle: "Add knowledge",
    sourceLabel: "Source",
    textLabel: "Text",
    knowledgeTextPlaceholder: "Paste strategy notes, legal clauses, or product context...",
    saveChunkButton: "Save chunk",
    recallTag: "Recall",
    searchKnowledgeTitle: "Search knowledge",
    topKLabel: "Top K",
    searchQueryLabel: "Query",
    knowledgeQueryPlaceholder: "Search the persistent knowledge base",
    searchButton: "Search",
    resultSetTag: "Result set",
    checking: "Checking",
    waitingHealth: "Waiting for health check...",
    online: "Online",
    workspaceAvailable: "Workspace available",
    offline: "Offline",
    connectingToBackend: "Connecting to backend...",
    backendErrorPrefix: "Backend error",
    remoteApiPrefix: "Remote API",
    primaryPrefix: "Primary",
    transient: "transient",
    streaming: "Streaming",
    sessionLabel: "Session",
    done: "Done",
    error: "Error",
    running: "Running",
    traceLabel: "Trace",
    saving: "Saving",
    knowledgeChunkStored: "Knowledge chunk stored",
    searching: "Searching",
    hits: "hits",
    planLabel: "plan",
    toolLabel: "tool",
    resultLabel: "result",
    finalLabel: "final answer",
  },
};

const tabs = [...document.querySelectorAll(".tab-button")];
const panels = [...document.querySelectorAll(".panel")];
const apiBaseInput = document.getElementById("api-base");
const apiModePill = document.getElementById("api-mode-pill");
const modelPill = document.getElementById("model-pill");
const languageSelect = document.getElementById("language-select");
const themeSelect = document.getElementById("theme-select");

function initialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryValue = params.get("lang");
  const storedValue = window.localStorage.getItem("helix.language");
  if (translations[queryValue]) return queryValue;
  if (translations[storedValue]) return storedValue;
  return "es";
}

function initialTheme() {
  const params = new URLSearchParams(window.location.search);
  const queryValue = params.get("theme");
  const storedValue = window.localStorage.getItem("helix.theme");
  if (queryValue === "dark" || queryValue === "light") return queryValue;
  if (storedValue === "dark" || storedValue === "light") return storedValue;
  return "light";
}

let currentLanguage = initialLanguage();
let currentTheme = initialTheme();

function t(key) {
  return translations[currentLanguage][key] || translations.es[key] || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  }

  for (const element of document.querySelectorAll("[data-i18n-placeholder]")) {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = t(key);
  }
}

function applyTheme() {
  document.documentElement.dataset.theme = currentTheme;
}

function setActiveTab(tabName) {
  for (const button of tabs) {
    button.classList.toggle("active", button.dataset.tab === tabName);
  }
  for (const panel of panels) {
    panel.classList.toggle("active", panel.dataset.panel === tabName);
  }
}

tabs.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function normalizeApiBase(value) {
  return (value || "").trim().replace(/\/+$/, "");
}

function sameOriginBase() {
  return normalizeApiBase(window.location.origin);
}

function initialApiBase() {
  const params = new URLSearchParams(window.location.search);
  const queryValue = params.get("api");
  const storedValue = window.localStorage.getItem("helix.apiBaseUrl");
  const configValue = window.HELIX_APP_CONFIG?.apiBaseUrl || "";
  return normalizeApiBase(queryValue || storedValue || configValue || "");
}

let apiBaseUrl = initialApiBase();

function updateApiModePill() {
  const label = apiBaseUrl ? `${t("remoteApiPrefix")} ${apiBaseUrl}` : t("sameOriginLabel");
  if (apiModePill) apiModePill.textContent = label;
}

function buildUrl(path) {
  if (!apiBaseUrl) return path;
  return `${apiBaseUrl}${path}`;
}

function saveApiBase() {
  apiBaseUrl = normalizeApiBase(apiBaseInput?.value || "");
  if (apiBaseUrl) {
    window.localStorage.setItem("helix.apiBaseUrl", apiBaseUrl);
  } else {
    window.localStorage.removeItem("helix.apiBaseUrl");
  }
  updateApiModePill();
}

async function fetchJson(path, options = {}) {
  const response = await fetch(buildUrl(path), options);
  let payload = {};
  try {
    payload = await response.json();
  } catch {
    payload = {};
  }
  if (!response.ok) {
    throw new Error(payload.error || `HTTP ${response.status}`);
  }
  return payload;
}

async function loadModels() {
  const payload = await fetchJson("/models");
  const aliases = (payload.models || []).map((item) => item.alias);
  setText("models-count", String(aliases.length).padStart(2, "0"));

  const selects = [
    document.getElementById("chat-alias"),
    document.getElementById("agent-model-alias"),
  ];

  for (const select of selects) {
    if (!select) continue;
    const current = select.value;
    const keepEmpty = select.id === "agent-model-alias";
    select.innerHTML = "";
    if (keepEmpty) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = t("noneOption");
      select.appendChild(option);
    }
    for (const alias of aliases) {
      const option = document.createElement("option");
      option.value = alias;
      option.textContent = alias;
      select.appendChild(option);
    }
    if (current && aliases.includes(current)) {
      select.value = current;
    } else if (!current && aliases[0] && !keepEmpty) {
      select.value = aliases[0];
    }
  }

  if (modelPill) {
    modelPill.textContent = aliases[0] ? `${t("primaryPrefix")} ${aliases[0]}` : t("noModelLoaded");
  }
}

async function refreshHealthAndModels() {
  try {
    const health = await fetchJson("/health");
    setText("connection-status", t("online"));
    setText("workspace-path", health.workspace_root || t("workspaceAvailable"));
    await loadModels();
  } catch (error) {
    setText("connection-status", t("offline"));
    setText("workspace-path", error.message);
    setText("models-count", "00");
    if (modelPill) modelPill.textContent = t("noModelLoaded");
    throw error;
  }
}

async function postSSE(path, payload, onEvent) {
  const response = await fetch(buildUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok || !response.body) {
    let errorText = "";
    try {
      const errorPayload = await response.json();
      errorText = errorPayload.error || "";
    } catch {
      errorText = await response.text();
    }
    throw new Error(errorText || `HTTP ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const chunks = buffer.split("\n\n");
    buffer = chunks.pop() || "";

    for (const chunk of chunks) {
      const lines = chunk.split("\n");
      let eventName = "message";
      let data = "";
      for (const line of lines) {
        if (line.startsWith("event:")) {
          eventName = line.slice(6).trim();
        } else if (line.startsWith("data:")) {
          data += line.slice(5).trim();
        }
      }
      if (!data) continue;
      onEvent(eventName, JSON.parse(data));
    }
  }
}

document.getElementById("api-save")?.addEventListener("click", async () => {
  saveApiBase();
  setText("connection-status", t("checking"));
  setText("workspace-path", t("connectingToBackend"));
  try {
    await refreshHealthAndModels();
  } catch (error) {
    setText("chat-meta", `${t("backendErrorPrefix")}: ${error.message}`);
  }
});

document.getElementById("chat-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const alias = document.getElementById("chat-alias").value;
  const prompt = document.getElementById("chat-prompt").value;
  const maxNewTokens = Number(document.getElementById("chat-max-tokens").value || 48);

  setText("chat-meta", t("streaming"));
  setText("chat-output", "");

  try {
    await postSSE(
      "/chat/stream",
      {
        alias,
        prompt,
        max_new_tokens: maxNewTokens,
        save_session: true,
      },
      (name, payload) => {
        if (name === "start") {
          setText("chat-meta", `${t("sessionLabel")} ${payload.session_id || t("transient")}`);
        } else if (name === "token") {
          setText("chat-output", payload.generated_text || "");
        } else if (name === "done") {
          setText("chat-output", payload.generated_text || "");
          setText("chat-meta", `${t("done")} / ${t("sessionLabel")} ${payload.session_id || t("transient")}`);
        } else if (name === "error") {
          setText("chat-meta", `${t("error")}: ${payload.error}`);
        }
      }
    );
  } catch (error) {
    setText("chat-meta", `${t("error")}: ${error.message}`);
  }
});

document.getElementById("agent-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const goal = document.getElementById("agent-goal").value;
  const agentName = document.getElementById("agent-name").value || "default-agent";
  const defaultModelAlias = document.getElementById("agent-model-alias").value || null;

  setText("agent-meta", t("running"));
  setText("agent-output", "");

  try {
    await postSSE(
      "/agent/run/stream",
      {
        goal,
        agent_name: agentName,
        default_model_alias: defaultModelAlias,
        max_steps: 4,
      },
      (name, payload) => {
        const current = document.getElementById("agent-output").textContent;
        if (name === "plan") {
          setText("agent-output", `${current}\n[${t("planLabel")}:${payload.planner}] ${payload.thought}\n`);
        } else if (name === "tool_call") {
          setText("agent-output", `${current}[${t("toolLabel")}] ${payload.tool_name} ${JSON.stringify(payload.arguments)}\n`);
        } else if (name === "tool_result") {
          setText("agent-output", `${current}[${t("resultLabel")}] ${JSON.stringify(payload.result, null, 2)}\n`);
        } else if (name === "tool_stream" && payload.payload?.event === "token") {
          setText("agent-output", `${current}${payload.payload.token_text || ""}`);
        } else if (name === "final") {
          setText("agent-output", `${current}\n[${t("finalLabel")}]\n${payload.final_answer}\n`);
        } else if (name === "done") {
          setText("agent-meta", `${t("done")} / ${t("traceLabel")} ${payload.trace_path}`);
        } else if (name === "error") {
          setText("agent-meta", `${t("error")}: ${payload.error}`);
        }
      }
    );
  } catch (error) {
    setText("agent-meta", `${t("error")}: ${error.message}`);
  }
});

document.getElementById("knowledge-add-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const agentName = document.getElementById("knowledge-agent").value || "default-agent";
  const source = document.getElementById("knowledge-source").value || "web-note";
  const text = document.getElementById("knowledge-text").value;

  setText("knowledge-meta", t("saving"));

  try {
    const payload = await fetchJson("/agent/knowledge/add-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ agent_name: agentName, source, text }),
    });
    setText("knowledge-meta", t("knowledgeChunkStored"));
    setText("knowledge-output", JSON.stringify(payload, null, 2));
  } catch (error) {
    setText("knowledge-meta", `${t("error")}: ${error.message}`);
  }
});

document.getElementById("knowledge-search-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const agentName = document.getElementById("knowledge-search-agent").value || "default-agent";
  const query = document.getElementById("knowledge-query").value;
  const topK = Number(document.getElementById("knowledge-top-k").value || 4);

  setText("knowledge-meta", t("searching"));

  try {
    const payload = await fetchJson(
      `/agent/knowledge/search?agent_name=${encodeURIComponent(agentName)}&query=${encodeURIComponent(query)}&top_k=${topK}`
    );
    setText("knowledge-meta", `${(payload.results || []).length} ${t("hits")}`);
    setText("knowledge-output", JSON.stringify(payload, null, 2));
  } catch (error) {
    setText("knowledge-meta", `${t("error")}: ${error.message}`);
  }
});

languageSelect?.addEventListener("change", async (event) => {
  currentLanguage = event.target.value;
  window.localStorage.setItem("helix.language", currentLanguage);
  applyTranslations();
  updateApiModePill();
  try {
    await refreshHealthAndModels();
  } catch (error) {
    setText("chat-meta", `${t("backendErrorPrefix")}: ${error.message}`);
  }
});

themeSelect?.addEventListener("change", (event) => {
  currentTheme = event.target.value;
  window.localStorage.setItem("helix.theme", currentTheme);
  applyTheme();
});

if (languageSelect) languageSelect.value = currentLanguage;
if (themeSelect) themeSelect.value = currentTheme;

applyTranslations();
applyTheme();

if (apiBaseInput) {
  apiBaseInput.value = apiBaseUrl;
  apiBaseInput.placeholder = apiBaseUrl || t("apiPlaceholder");
}

updateApiModePill();

refreshHealthAndModels().catch((error) => {
  setText("chat-meta", `${t("backendErrorPrefix")}: ${error.message}`);
});
