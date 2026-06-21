const downloadButton = document.querySelector("#downloadButton");
const fileNote = document.querySelector("#fileNote");

const formatBytes = (bytes) => {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "";
  }

  const units = ["B", "KB", "MB", "GB"];
  const power = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** power;
  return `${value.toFixed(value >= 10 || power === 0 ? 0 : 1)} ${units[power]}`;
};

const updateFileNote = async () => {
  try {
    const response = await fetch(downloadButton.href, { method: "HEAD" });
    if (!response.ok) {
      return;
    }

    const size = formatBytes(Number(response.headers.get("content-length")));
    const modified = response.headers.get("last-modified");
    const date = modified
      ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(modified))
      : "";

    fileNote.textContent = [size, date].filter(Boolean).join(" | ") || "EXE installer included";
  } catch {
    fileNote.textContent = "EXE installer included";
  }
};

updateFileNote();
