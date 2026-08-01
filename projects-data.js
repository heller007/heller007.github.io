/* Shared project details for index cards → project.html?id=...
   Image URLs point at raw GitHub assets from each repo. */
window.PORTFOLIO_PROJECTS = {
  "dsp-cpp": {
    title: "dsp++",
    summary: "Lightweight C++20 DSP toolkit — signal generation, DFT, CSV export, and plotting.",
    about: [
      "DSP++ is a C++20 project for learning and experimenting with digital signal processing. It generates basic signals, computes a direct DFT, exports CSV for time and frequency data, and can visualize plots via an optional Python helper.",
      "DSP modules are header-only under include/dsp/ (signal container, generators, DFT helpers, CSV I/O). A CLI demo tool (dsppp) is built with CMake 3.20+ and a C++20 compiler."
    ],
    highlights: [
      "Signals: sine, square, sawtooth, impulse, step, sinc",
      "Direct O(N²) DFT with one-sided magnitude spectrum",
      "CSV export + scripts/plot.py (matplotlib) for visualization",
      "Header-only modules: signal.hpp, generate.hpp, dft.hpp, io.hpp"
    ],
    tags: ["C++20", "DSP", "CMake", "DFT"],
    repo: "https://github.com/heller007/dsp-cpp",
    images: []
  },
  "imgproc-cpp": {
    title: "ip++",
    summary: "Dependency-light C++17 image processing library (stb_image) with CLI — no OpenCV required.",
    about: [
      "imgproc-cpp is a small C++17 image processing library with a command-line tool, built on stb_image / stb_image_write for I/O. Headers live under include/imgproc/; link against the imgproc CMake target.",
      "Modules cover grayscale, histograms, thresholding, convolution/blurs, edge detectors (Sobel, Prewitt, Laplacian, Canny), morphology, and connected components (4/8-connectivity with union-find). CI, doctest unit tests, and per-topic examples ship with the repo."
    ],
    highlights: [
      "Canny / Sobel / Prewitt / Laplacian edges",
      "Gaussian, box, and median blur; morphological open/close/gradient",
      "Otsu and adaptive-mean thresholding; connected components",
      "CLI: imgproc_cli gray|blur|edge|morph|threshold|cc"
    ],
    tags: ["C++17", "stb_image", "CMake", "computer vision"],
    repo: "https://github.com/heller007/imgproc-cpp",
    images: [
      {
        src: "https://raw.githubusercontent.com/heller007/imgproc-cpp/main/data/samples/input_rgb.png",
        alt: "Sample RGB input"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/imgproc-cpp/main/data/samples/edge_canny.png",
        alt: "Canny edge detection"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/imgproc-cpp/main/data/samples/blur_gauss.png",
        alt: "Gaussian blur"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/imgproc-cpp/main/data/samples/th_otsu.png",
        alt: "Otsu threshold"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/imgproc-cpp/main/data/samples/morph_gradient.png",
        alt: "Morphological gradient"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/imgproc-cpp/main/data/samples/cc_labels.png",
        alt: "Connected-component labels"
      }
    ]
  },
  "novel-tracker": {
    title: "Novel Tracker",
    summary: "M.Tech thesis — single-object tracker treating inter-frame interval as a first-class architectural input.",
    about: [
      "This M.Tech thesis explores single-object tracking where the inter-frame time interval is an explicit architectural input rather than an implicit constant — relevant for high-velocity and irregular-framerate video.",
      "The intended stack builds on modern visual representations and sequence models (DINOv2, Mamba-2 / SSMs) in PyTorch. The GitHub repo Highvelocity-object-tracker is the home for this work (content still landing)."
    ],
    highlights: [
      "Inter-frame Δt as a first-class model input",
      "Target stack: PyTorch · DINOv2 · Mamba-2 / SSM",
      "Aimed at high-velocity / irregular-framerate tracking"
    ],
    tags: ["PyTorch", "DINOv2", "Mamba-2", "SSM"],
    repo: "https://github.com/heller007/Highvelocity-object-tracker",
    images: []
  },
  "defect-vqa": {
    title: "VQA Defect Detection",
    summary: "Fine-tuned Qwen3-VL-2B for industrial defect VQA on VisA and MVTec AD — LoRA, NF4 serving, FastAPI + Gradio.",
    about: [
      "Industrial Defect VQA fine-tunes Qwen3-VL-2B for visual question answering on VisA and MVTec AD. The pipeline covers joint LoRA training, merging to a standalone checkpoint, NF4 4-bit serving, an HTTP API, and an optional Gradio UI.",
      "Datasets are not shipped in-repo (VisA / MVTec under their own licenses). Training uses Hugging Face Transformers + PEFT; deploy via uvicorn (FastAPI), CLI infer, or Gradio. Code is MIT; cite the dataset papers if you use VisA/MVTec."
    ],
    highlights: [
      "Joint LoRA: VisA macro 0.814 · MVTec macro 0.877 (120-image stratified eval)",
      "Merged + NF4 4-bit: VisA 0.820 · MVTec 0.886",
      "RTX 3060: FP16 ~4.1 GB / 0.24 s · NF4 ~1.6 GB (−61%) / 0.36 s",
      "Stack: PyTorch · Transformers · PEFT LoRA · bitsandbytes · FastAPI · Gradio"
    ],
    tags: ["Qwen3-VL", "VQA", "VisA", "MVTec", "LoRA"],
    repo: "https://github.com/heller007/defect-vqa-finetuning",
    images: []
  },
  "underwater": {
    title: "Underwater Debris Detection",
    summary: "Cost-aware selective enhancement for marine-debris detection — SeaClear LOSO, YOLOv8n, dual-T4 Kaggle.",
    about: [
      "Research code for cost-aware selective enhancement and deferral on marine-debris detection using the SeaClear dataset in a leave-one-sequence-out (LOSO) protocol with YOLOv8n.",
      "Designed for a GitHub → Kaggle loop on dual T4 GPUs: attach SeaClear as a Kaggle dataset, run staged experiments via scripts/run_stage.py (smoke / prep / e1). Phase 1 covers data readiness and raw baseline (E0–E1); later stages are scaffolded. Experiment findings land in reports/EXPERIMENT_LOG.md."
    ],
    highlights: [
      "SeaClear LOSO protocol with held-out site (e.g. Lokrum)",
      "YOLOv8n detector · Ultralytics multi-GPU (device=0,1)",
      "Staged CLI: prep → smoke → e1 baseline",
      "Configs under configs/; paper log in reports/EXPERIMENT_LOG.md"
    ],
    tags: ["Python", "YOLOv8", "SeaClear", "Kaggle"],
    repo: "https://github.com/heller007/underwater",
    images: []
  },
  "tinyml-seminar": {
    title: "Model Compression Study",
    summary: "Quantization, pruning, and knowledge distillation on CIFAR-10 — TinyML-oriented trade-offs.",
    about: [
      "A study of model compression techniques — quantization, pruning, and knowledge distillation — with experiments on CIFAR-10.",
      "Oriented toward TinyML-style deployment: accuracy vs model size, latency, and resource constraints. Hosted in the tinyml-seminar repository."
    ],
    highlights: [
      "Techniques: quantization, pruning, knowledge distillation",
      "Benchmark: CIFAR-10",
      "Focus: deployability under tight compute / memory budgets"
    ],
    tags: ["PyTorch", "quantization", "KD", "TinyML"],
    repo: "https://github.com/heller007/tinyml-seminar",
    images: []
  },
  "cybergaurd": {
    title: "Code-mixed Hinglish Classification",
    summary: "CyberGaurd — multilingual cyber-crime complaint classifier for romanized Hinglish; best test macro-F1 58.8%.",
    about: [
      "CyberGaurd classifies noisy romanized Hinglish / code-mixed Indian cyber-crime complaints into a curated 9-class label set (18.3K train / 30K test). It compares classical ML, transformer encoders (MuRIL, XLM-R), and small-LLM LoRA fine-tuning, with a deployable inference API and chat-style review UI.",
      "The deployed path is MuRIL-base + 28-dim rule-based NER features (UPI IDs, banks, social apps, …) + focal loss + per-class threshold calibration (58.3% macro-F1). LoRA on Qwen2.5-0.5B (r=64) reaches 58.8%. NER fusion adds ~2–3 pts; filtering weak labels (11 → 9 classes) improved macro-F1 by ~8 pts."
    ],
    highlights: [
      "Best: LoRA Qwen2.5-0.5B — 58.8% test macro-F1",
      "Deployed: MuRIL-base + NER + calibration — 58.3%",
      "MuRIL beats XLM-R-large by +1.3 pts on this Hinglish task",
      "Zero-shot LLM fails (~2% F1) — fine-tuning is essential",
      "FastAPI UI with feedback logging to corrections.jsonl"
    ],
    tags: ["NLP", "MuRIL", "XLM-R", "Hinglish", "LoRA"],
    repo: "https://github.com/heller007/cybergaurd",
    images: [
      {
        src: "https://raw.githubusercontent.com/heller007/cybergaurd/main/docs/images/dataset_overview.png",
        alt: "Dataset overview"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/cybergaurd/main/docs/images/dataset_class_distribution.png",
        alt: "Class distribution"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/cybergaurd/main/docs/images/model_comparison.png",
        alt: "Model comparison (macro-F1)"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/cybergaurd/main/docs/images/encoder_comparison.png",
        alt: "Encoder comparison"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/cybergaurd/main/docs/images/training_curves_muril.png",
        alt: "MuRIL training curves"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/cybergaurd/main/docs/images/ui_input.png",
        alt: "Review UI — input"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/cybergaurd/main/docs/images/ui_result.png",
        alt: "Review UI — classification result"
      }
    ]
  },
  "pipelined-riscv": {
    title: "Pipelined RISC-V Processor",
    summary: "5-stage pipelined RV32I/M CPU in Verilog — forwarding, hazards, per-module testbenches, Quartus + CI.",
    about: [
      "A classic 5-stage in-order RISC-V pipeline (IF → ID → EX → MEM → WB) written in Verilog for teaching/lab use, targeting Intel/Altera Cyclone V (Quartus) with ModelSim/Questa simulation.",
      "Hazards: ForwardingUnit (EX/MEM and MEM/WB → ALU), HazardDetectionUnit (load-use stall), and ID-stage flush for taken branches/jumps. Implements a solid RV32I subset plus signed mul/div (RV32M). Word-only lw/sw; no CSRs/traps/privilege. Documented internals and VCD-derived waveforms live under docs/."
    ],
    highlights: [
      "Stages: PC/fetch → decode/branch → ALU/forward → mem → writeback",
      "RV32I ALU/branch/jump + signed mul/div; Imm formats I/S/B/J/U",
      "Per-module testbenches + full-pipeline integration test",
      "GitHub Actions CI · Quartus project files · docs/notes.md"
    ],
    tags: ["Verilog", "RISC-V", "FPGA", "Quartus"],
    repo: "https://github.com/heller007/pipelined-riscv",
    images: [
      {
        src: "https://raw.githubusercontent.com/heller007/pipelined-riscv/main/docs/images/pipeline_overview.png",
        alt: "Pipeline datapath overview"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/pipelined-riscv/main/docs/images/full_pipeline.png",
        alt: "Full pipeline diagram"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/pipelined-riscv/main/docs/images/tb_ForwardingUnit.png",
        alt: "Forwarding unit testbench waveform"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/pipelined-riscv/main/docs/images/tb_HazardDetectionUnit.png",
        alt: "Hazard detection testbench waveform"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/pipelined-riscv/main/docs/images/tb_ALU.png",
        alt: "ALU testbench waveform"
      },
      {
        src: "https://raw.githubusercontent.com/heller007/pipelined-riscv/main/docs/images/tb_BranchUnit.png",
        alt: "Branch unit testbench waveform"
      }
    ]
  },
  "lidc-nodule": {
    title: "Lung Nodule Segmentation",
    summary: "LIDC-IDRI medical image segmentation with modern foundation-model approaches.",
    about: [
      "Medical image segmentation for lung nodules on the LIDC-IDRI dataset.",
      "Explores modern segmentation approaches including MedSAM2-style foundation models for clinical imaging pipelines. Repository: LIDC_nodule_segmentation."
    ],
    highlights: [
      "Dataset: LIDC-IDRI",
      "Focus: nodule segmentation in CT",
      "Stack direction: MedSAM2 / medical foundation models"
    ],
    tags: ["medical imaging", "segmentation", "MedSAM2"],
    repo: "https://github.com/heller007/LIDC_nodule_segmentation",
    images: []
  },
  "liveboard": {
    title: "Liveboard",
    summary: "Live lecture whiteboard — educator annotates slides; remote viewers follow ink in near-real-time.",
    about: [
      "Liveboard is a live lecture board: one educator annotates slides while remote viewers watch ink in near-real-time. The web app is a full-viewport Excalidraw board with a debug overlay (element count, page, role).",
      "Monorepo (pnpm): apps/web (Vite + React + TypeScript + Excalidraw), apps/server (Fastify + WebSocket), packages/types (@board/types — shared wire protocol). Dev: pnpm dev → web :5173, server :8787."
    ],
    highlights: [
      "Realtime ink sync educator → viewers",
      "Vite + React + TypeScript + Excalidraw",
      "Fastify + WebSocket server",
      "Shared protocol package @board/types"
    ],
    tags: ["TypeScript", "Excalidraw", "WebSocket", "Fastify"],
    repo: "https://github.com/heller007/Liveboard",
    images: []
  },
  "prdimp": {
    title: "PrDiMP (Unofficial)",
    summary: "Unofficial PyTorch implementation of PrDiMP (CVPR 2020) for visual object tracking.",
    about: [
      "An unofficial PyTorch implementation of PrDiMP (CVPR 2020) — probabilistic regression for discriminative visual object tracking.",
      "Intended as a reference and experimentation base for tracking research. Related work also lives in PrDiMP50-PyTorch and pytrack_v2 on the same GitHub account."
    ],
    highlights: [
      "Based on PrDiMP (CVPR 2020)",
      "PyTorch visual object tracking",
      "Unofficial reimplementation for study / experimentation"
    ],
    tags: ["PyTorch", "tracking", "PrDiMP"],
    repo: "https://github.com/heller007/PrDimp_unofficial",
    images: []
  }
};
