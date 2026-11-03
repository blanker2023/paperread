#!/usr/bin/env python3
"""计算成像日报 · QQ 邮箱提醒发送脚本（SMTP 通道）

读取 pipeline/mail_config.json：
{
  "smtp_user": "你的QQ号@qq.com",
  "smtp_auth_code": "QQ邮箱SMTP授权码",
  "to": "1296527078@qq.com"
}
授权码获取：QQ 邮箱网页版 → 设置 → 账户 → POP3/SMTP 服务 → 生成授权码。

用法: python3 pipeline/send_reminder.py --subject "..." --body-file msg.txt
"""
import argparse
import json
import smtplib
import sys
from email.header import Header
from email.mime.text import MIMEText
from pathlib import Path

CONFIG_PATH = Path(__file__).parent / "mail_config.json"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--subject", required=True)
    ap.add_argument("--body-file", required=True)
    args = ap.parse_args()

    if not CONFIG_PATH.exists():
        print(json.dumps({"error": "missing_config",
                          "hint": "创建 pipeline/mail_config.json，填入 smtp_user 与 smtp_auth_code"}, ensure_ascii=False))
        return 2
    cfg = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    body = Path(args.body_file).read_text(encoding="utf-8")

    msg = MIMEText(body, "plain", "utf-8")
    msg["Subject"] = Header(args.subject, "utf-8")
    msg["From"] = cfg["smtp_user"]
    msg["To"] = cfg.get("to", "1296527078@qq.com")

    with smtplib.SMTP_SSL("smtp.qq.com", 465, timeout=30) as smtp:
        smtp.login(cfg["smtp_user"], cfg["smtp_auth_code"])
        smtp.sendmail(cfg["smtp_user"], [msg["To"]], msg.as_string())
    print(json.dumps({"sent": True, "to": msg["To"], "subject": args.subject}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())
