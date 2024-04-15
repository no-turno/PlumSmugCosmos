{ pkgs }: {
    deps = [
      pkgs.nodejs_21
      pkgs.nodePackages_latest.typescript-language-server
      pkgs.unzip
      pkgs.nixd
    ];
}